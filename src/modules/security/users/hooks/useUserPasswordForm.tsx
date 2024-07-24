import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IChangePassword } from 'modules/security/users/interfaces/IChangePassword';
import UserServices from 'modules/security/users/services/user.services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CURRENT_USER_KEY } from '@dfl/react-security';
import { userPasswordSchema } from '../schemas/user.schema';
import { useLocation } from 'react-router';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

const useUserPasswordForm = (user: IUser) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const { id } = useParams();
  const isMe = useMemo(
    () => (pathname?.includes('/user/me') || user?._id === id ? 'me' : ''),
    [id, pathname, user?._id],
  );

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(userPasswordSchema),
    defaultValues: {
      lastPassword: '',
      password: '',
      confirm: '',
    },
  });

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (dataForm: IChangePassword) =>
      UserServices.updatePassword(isMe || user?._id, dataForm.lastPassword, dataForm.password),
    {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries([CURRENT_USER_KEY]);
        toast.success(t('securityTab.passwordSuccessfullyUpdated'));
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
    onSubmit: handleSubmit(mutate),
  };
};

export default useUserPasswordForm;
