import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import { ISupplierUser } from 'modules/inventory/provider/supplier/interfaces';
import { supplierUserScheme } from 'modules/inventory/provider/supplier/schemas/supplierUser.schema';
import RoleProviderService from 'modules/security/roles/services/roleProvider.service';
import { SUPPLIER_USERS_KEY } from 'modules/inventory/provider/supplier/constants';

interface useAddSupplierProps {
  supplierId: string;

  // Methods
  onClose: () => void;
}

const useAddSupplierUsersForm = ({ supplierId, onClose }: useAddSupplierProps) => {
  const { t } = useTranslation('supplier');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(supplierUserScheme),
    defaultValues: { users: [], role: null },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation<any, any, ISupplierUser>(
    ({ users, role }) => RoleProviderService.addUsers(role._id, users, supplierId),
    {
      onSuccess: () => {
        toast.success(t('successCreatedUsers'));
        queryClient.invalidateQueries([SUPPLIER_USERS_KEY, supplierId]);
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
