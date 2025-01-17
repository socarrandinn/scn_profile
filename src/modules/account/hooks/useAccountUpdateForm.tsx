import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/security/users/interfaces/IUser';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useAccountDetail } from 'modules/account/contexts/AccountDetail';
import { userSchema } from 'modules/security/users/schemas/user.schema';
import AccountServices from 'modules/account/services/account.services';
import { USER_ME_KEY, USERS_LIST_KEY } from 'modules/security/users/constants/queries';

const useAccountUpdateForm = (onSuccess?: () => void) => {
  const { t } = useTranslation('account');
  const { setUser, user } = useAccountDetail();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: user,
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (user: IUser) => {
      delete user?._id;
      return AccountServices.save(user);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([USER_ME_KEY]);
        queryClient.invalidateQueries([USERS_LIST_KEY]);
        toast.success(t('successUpdate'));
        onSuccess?.();
        if (setUser) {
          setUser(data);
        }
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useAccountUpdateForm;
