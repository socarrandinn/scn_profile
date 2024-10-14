import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import RoleProviderService from 'modules/security/roles/services/roleProvider.service';
import { logisticUserScheme } from 'modules/inventory/provider/logistics/schemas/logistics.schema';
import { ILogisticUser } from 'modules/inventory/provider/logistics/interfaces';
import { LOGISTIC_USERS_KEY } from 'modules/inventory/provider/logistics/constants';

const useAddLogisticUsersForm = ({ logisticId, onClose }: { logisticId: string; onClose?: () => void }) => {
  const { t } = useTranslation('supplier');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(logisticUserScheme),
    defaultValues: { users: [], role: null },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation<any, any, ILogisticUser>(
    ({ users, role, warehouse }) => RoleProviderService.addUsers(role._id, users, logisticId, warehouse?._id),
    {
      onSuccess: () => {
        toast.success(t('successCreatedUsers'));
        queryClient.invalidateQueries([LOGISTIC_USERS_KEY, logisticId]);
        onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    formState,
    watch,
    reset: () => {
      resetMutation();
      reset();
    },
    // @ts-ignore
    onSubmit: handleSubmit((values: ILogisticUser) => {
      mutate(values);
    }),
  };
};

export default useAddLogisticUsersForm;
