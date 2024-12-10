import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { userSchema } from '../schemas/user.schema';
import { IUserInvite } from 'modules/security/users/interfaces/IUserInvite';
import UserInviteServices from 'modules/security/users/services/user-invite.services';

const initialValue: IUserInvite = {
  email: '',
  security: {
    roles: [],
  },
};

const useUsersInviteForm = (
  onClose: () => void,
  queryKey?: string,
) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: initialValue,
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (user: IUserInvite) => {
      const roles = user?.security?.roles || [];
      const query = {
        email: user?.email,
        security: {
          roles: roles.map((item) => item._id as string),
        },
      };
      return UserInviteServices.invite(query);
    },
    {
      onSuccess: () => {
        queryKey && queryClient.invalidateQueries([queryKey]);
        toast.success(t('successUpdate'));
        resetForm();
        onClose?.();
      },
      onError: (error: any) => {
        if (error?.message === 'Duplicated keys') {
          setError(error?.key?.[0], { message: 'errors:duplicatedValues' });
        }
      },
    },
  );

  const reset = useCallback(() => {
    resetMutation();
    resetForm();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUsersInviteForm;
