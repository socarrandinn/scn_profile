import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IRoleProvider } from 'modules/security/roles/interfaces';
import { ROLES_PROVIDER_ONE_KEY } from 'modules/security/roles/constants/queries';
import { invalidateRoleProviderListQuery } from 'modules/security/roles/services/util.service';
import roleService from '../services/role.service';

const useAddPermissionToRoleProviderForm = (role: IRoleProvider | undefined) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (values: string[]) => {
      return roleService.addPermissions(role?._id, values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([role?._id, ROLES_PROVIDER_ONE_KEY]);
        invalidateRoleProviderListQuery(queryClient, role);
        toast.success(t('successAddPermissions'));
      },
    },
  );

  return {
    error,
    isLoading,
    isSuccess,
    data,
    mutate,
  };
};

export default useAddPermissionToRoleProviderForm;
