import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IUserInvite } from 'modules/security/users/interfaces/IUserInvite';
import UserInviteServices from 'modules/security/users/services/user-invite.services';
import { useNavigate } from 'react-router';

const initialValue: IUserInvite = {
  email: '',
  security: {
    roles: [],
  },
  type: null,
  space: null,
};

const useUsersInviteForm = (
  validationScheme: any,
  redirect: string,
  apiPath: string,
  onClose?: () => void,
  queryKey?: string,
) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
    setError,
    watch,
  } = useForm({
    resolver: yupResolver(validationScheme),
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
      return UserInviteServices.invite(apiPath, user);
    },
    {
      onSuccess: () => {
        queryKey && queryClient.invalidateQueries([queryKey]);
        toast.success(t('invitationSuccess'));
        onClose?.();
        navigate(`${redirect}/invitation`);
        resetForm();
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
    watch,
    data,
    mutate,
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUsersInviteForm;
