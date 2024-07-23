import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { RoleService } from 'modules/security/roles/services';
import { IRole } from 'modules/security/roles/interfaces';
import { ROLES_ONE_KEY } from 'modules/security/roles/constants/queries';
import { invalidateRoleListQuery } from 'modules/security/roles/services/util.service';

const useAddPermissionToRoleForm = (role: IRole | undefined) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (values: string[]) => {
      return RoleService.addPermissions(role?._id, values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([role?._id, ROLES_ONE_KEY]);
        invalidateRoleListQuery(queryClient, role);
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

export default useAddPermissionToRoleForm;
