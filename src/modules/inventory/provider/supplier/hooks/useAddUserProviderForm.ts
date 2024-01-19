import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { IStore } from 'modules/inventory/store/interfaces';
import { IRole } from 'modules/security/roles/interfaces';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IProvider } from '../../common/interfaces';
import { supplierUserScheme } from '../schemas/supplierUser.schema';
import { SupplierService } from '../services';

const useAddUsersProviderForm = (provider: IProvider | undefined, onClose: () => void) => {
  const { t } = useTranslation('providerProduct');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
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
  } = useMutation<any, any, { users: IUser[]; roles: IRole[]; stores: IStore[] }>(
    ({ users, roles, stores }) => {
      const usersId: string[] = users?.map((user) => user._id as string) || [];
      const roleId: string[] = roles?.map((role) => role._id as string) || [];
      const storeId: string[] = stores?.map((store) => store._id as string) || [];

      return SupplierService.saveOrUpdate({
        users: usersId,
        roles: roleId,
        stores: storeId,
        provider: provider?._id as string,
        type: provider?.type as string,
      });
    },
    {
      onSuccess: () => {
        toast.success(t('successAddUsers'));
        queryClient.invalidateQueries([`users-${provider?._id}`]);
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
    reset: () => {
      resetMutation();
      reset();
    },
    // @ts-ignore
    onSubmit: handleSubmit((values) => { mutate(values); }),
  };
};

export default useAddUsersProviderForm;
