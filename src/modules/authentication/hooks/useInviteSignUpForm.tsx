import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { UserInviteService } from 'modules/security/users/services';
import { IUserInviteSignUp } from 'modules/security/users/interfaces/IUserInvite';
import { signUpSchema } from '../schemas/login.schema';
import { useUserInviteContext } from '../contexts/UserInvite';
import { useEffect } from 'react';

const useInviteSignUpForm = (inviteId: string) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const { data: invite, isLoading: isEmailLoading } = useUserInviteContext();
  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: 'cargando...',
      password: '',
      acceptTerms: false,
    },
  });
  const termAcceptance = watch('acceptTerms');

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (user: IUserInviteSignUp) => {
      return UserInviteService.signUpInvite(inviteId, user);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries([USERS_LIST_KEY]);
        toast.success(t('successUpdate'));
      },
    },
  );

  useEffect(() => {
    if (invite) {
      setValue('email', invite?.email);
    }
  }, [invite, setValue]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    termAcceptance,
    isEmailLoading,
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
export default useInviteSignUpForm;
