import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import { IStore } from 'modules/inventory/store/interfaces';
import { IRole } from 'modules/security/roles/interfaces';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { ISupplierUser } from '../interfaces';
import { supplierUserScheme } from '../schemas/supplierUser.schema';
import { SupplierService } from '../services';

const useAddSupplierUsersForm = (supplierId: string, onClose: () => void) => {
  const { t } = useTranslation('supplier');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(supplierUserScheme),
    defaultValues: { users: [] },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation<any, any, { users: IUser[]; role: IRole; store: IStore }>(
    ({ users, role, store }) => {
      const usersId: string[] = users?.map((user) => user._id as string) || [];

      return SupplierService.update(
        supplierId,
        {
          users: usersId,
          role,
          store,
        },
      );
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
