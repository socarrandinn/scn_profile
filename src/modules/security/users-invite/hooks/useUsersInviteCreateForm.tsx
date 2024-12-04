import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IUserInvitation } from 'modules/security/users-invite/interfaces';
import { UsersInviteService } from 'modules/security/users-invite/services';
import { USERS_INVITES_LIST_KEY } from 'modules/security/users-invite/constants';
import { useEffect, useCallback } from 'react';
import { userInvitationSchema } from 'modules/security/users-invite/schemas/users-invite.schema';

export const initUserInviteValue: IUserInvitation = {
  email: '',
  security: {
    roles: [],
  },
};

const useUsersInviteCreateForm = (
  onClose: () => void,
) => {
  const { t } = useTranslation('usersInvite');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    formState,
  } = useForm({
    resolver: yupResolver(userInvitationSchema),
    defaultValues: initUserInviteValue,
  });

  useEffect(() => {
    resetForm(initUserInviteValue);
  }, [resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation((payload: IUserInvitation) => UsersInviteService.inviteUser(payload), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([USERS_INVITES_LIST_KEY]);
      values?._id && queryClient.invalidateQueries([values._id]);
      toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
      onClose?.();
      resetForm();
    },
  });

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    formState,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUsersInviteCreateForm;
