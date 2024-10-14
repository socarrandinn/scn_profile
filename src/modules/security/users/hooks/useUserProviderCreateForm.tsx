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
import { LOGISTIC_USERS_KEY } from 'modules/inventory/provider/logistics/constants';
import { SUPPLIER_USERS_KEY } from 'modules/inventory/provider/supplier/constants';

export const initialUserInviteValue: IUserInvite = {
  email: '',
  roles: [],
  type: null,
  provider: '',
  isNationalWarehouse: false,
};

const useUserProviderCreateForm = (defaultValues: IUserInvite = initialUserInviteValue, onClose: () => void) => {
  const { t } = useTranslation('users');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(userProviderSchema),
    defaultValues: defaultValues || initialUserInviteValue,
  });

  const providerType = watch('type');
  const isNationalWarehouse = watch('isNationalWarehouse');

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
        queryClient.invalidateQueries([USERS_LIST_KEY, LOGISTIC_USERS_KEY, SUPPLIER_USERS_KEY]);
        toast.success(t('successProviderCreate'));
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
    providerType,
    isNationalWarehouse,
    reset: () => {
      resetMutation();
      reset();
    },
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const { isNationalWarehouse, warehouse, ...rest } = values;
      mutate({
        ...rest,
        ...(!isNationalWarehouse ? { warehouse } : {}),
      });
    }),
  };
};
export default useUserProviderCreateForm;
