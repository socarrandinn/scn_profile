import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { RoleService } from 'modules/security/roles/services';
import { IRole } from 'modules/security/roles/interfaces';
import { ROLES_PROVIDER_ONE_KEY } from 'modules/security/roles/constants/queries';
import { invalidateRoleListQuery } from 'modules/security/roles/services/util.service';
import { SPACE_TYPE, SPACE_TYPES_MAP } from 'modules/security/users/constants/space-types.constants';
import { useMemo } from 'react';

const useAddPermissionToRoleForm = (role: IRole | undefined, type: SPACE_TYPE) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();

  const service = useMemo(() => SPACE_TYPES_MAP[type], [type]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (values: string[]) => {
      return RoleService.addPermissionsByType(service, role?._id, values);
    },
    {
      onSuccess: () => {
        type === SPACE_TYPE.PROVIDER && queryClient.invalidateQueries([role?._id, ROLES_PROVIDER_ONE_KEY])
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
