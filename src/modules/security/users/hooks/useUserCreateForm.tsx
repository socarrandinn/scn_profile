import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userSchema } from '../schemas/user.schema';
import { IUser } from 'modules/security/users/interfaces/IUser';
import UserServices from 'modules/security/users/services/user.services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';

const initialValue: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  roles: [],
};

const useUserCreateForm = (defaultValues: IUser = initialValue, onClose: () => void, withOutRoles: boolean = false) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: defaultValues || initialValue,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (user: IUser) => {
      const query = {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phone: undefined,
        roles: user?.security?.roles,
      };
      if (withOutRoles) {
        delete query?.roles;
      }
      return UserServices.saveOrUpdate(query);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries([USERS_LIST_KEY]);
        if (variables._id) {
          queryClient.invalidateQueries([variables._id]);
        }
        toast.success(t('successUpdate'));
        onClose?.();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset: () => {
      resetMutation();
      reset();
    },
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUserCreateForm;
