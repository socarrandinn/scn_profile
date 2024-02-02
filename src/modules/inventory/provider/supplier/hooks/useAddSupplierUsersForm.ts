import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import { IStore } from 'modules/inventory/store/interfaces';
import { IRole } from 'modules/security/roles/interfaces';
import { ISupplierUser } from '../interfaces';
import { supplierUserScheme } from '../schemas/supplierUser.schema';
import { SupplierService } from '../services';
import { LogisticsService } from '../../logistics/services';

interface useAddSupplierProps {
  supplierId: string;
  type: 'PRODUCT' | 'LOGISTIC';

  // Methods
  onClose: () => void;
}

const useAddSupplierUsersForm = ({ supplierId, type, onClose }: useAddSupplierProps) => {
  const { t } = useTranslation('supplier');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(supplierUserScheme),
    defaultValues: { users: [], role: null, store: null },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation<any, any, { users: string[]; role: IRole; store: IStore }>(
    ({ users, role, store }) => {
      if (type === 'LOGISTIC') {
        return LogisticsService.update(supplierId, {
          users,
          role: role._id,
          store: store._id,
          type,
        });
      }

      return SupplierService.update(supplierId, {
        users,
        role: role._id,
        store: store._id,
        type,
      });
    },
    {
      onSuccess: () => {
        toast.success(t('successCreatedUsers'));
        queryClient.invalidateQueries([`users-${supplierId}`]);
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
    onSubmit: handleSubmit((values: ISupplierUser) => {
      mutate(values);
    }),
  };
};

export default useAddSupplierUsersForm;
