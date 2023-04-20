import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userSchema } from '../schemas/user.schema';
import { IUser } from 'modules/security/users/interfaces/IUser';
import UserServices from 'modules/security/users/services/user.services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo } from 'react';
import { USERS_ONE_KEY } from '../constants/queries';
import { useUserDetail } from '../contexts/UserDetail';
import { useLocation } from 'react-router';

const initValues: IUser = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
};

const useUserUpdateForm = (user: IUser = initValues) => {
  const { setUser } = useUserDetail();
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: user,
  });
  const { pathname } = useLocation();
  const isMe = useMemo(() => (pathname?.includes('/user/me') ? 'me' : ''), [pathname]);

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (user: IUser) =>
      UserServices.update(isMe || user?._id, {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
      }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([USERS_ONE_KEY]);
        toast.success(t('successUpdate'));
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUserUpdateForm;
