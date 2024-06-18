import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userProviderSchema } from '../schemas/user.schema';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { IUserInvite } from '../interfaces/IUserInvite';
import { UserInviteService } from '../services';

const initialValue: IUserInvite = {
  email: '',
  roles: [],
  type: null,
  provider: '',
  isNationalStore: false
};

const useUserProviderCreateForm = (
  defaultValues: IUserInvite = initialValue,
  onClose: () => void
) => {
  const { t } = useTranslation('users');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(userProviderSchema),
    defaultValues: defaultValues || initialValue,
  });

  const providerType = watch('type');
  const isNationalStore = watch('isNationalStore');

  useEffect(() => {
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
    (user: IUserInvite) => {
      return UserInviteService.invite(user);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries([USERS_LIST_KEY]);
        toast.success(t('successProviderCreate'));
        onClose?.();
      },
    }
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    providerType,
    isNationalStore,
    reset: () => {
      resetMutation();
      reset();
    },
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const { isNationalStore, store, ...rest } = values
      mutate({
        ...rest,
        ...(!isNationalStore ? { store } : {})
      });
    }),
  };
};
export default useUserProviderCreateForm;
