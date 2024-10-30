import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { commonInvitationSchema } from 'modules/security/users-invite/schemas/users-invite.schema';
import { ICreateUserInvite } from 'modules/security/users-invite/interfaces';
import { UsersInviteService } from 'modules/security/users-invite/services';
import { USERS_INVITES_LIST_KEY } from 'modules/security/users-invite/constants';
import { useEffect, useCallback } from 'react';

export const initUserInviteValue: ICreateUserInvite = {
  email: '',
  security: {
    roles: [],
  },
};

const useUsersInviteCreateForm = (
  onClose: () => void,
  defaultValues: ICreateUserInvite = initUserInviteValue,
  schema: any,
) => {
  const { t } = useTranslation('usersInvite');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(schema || commonInvitationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation(
    (payload: ICreateUserInvite) => {
      if (payload.inviteType) {
        return UsersInviteService.inviteProviderUser(payload);
      }
      return UsersInviteService.inviteProviderUser(payload);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([USERS_INVITES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

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
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUsersInviteCreateForm;
