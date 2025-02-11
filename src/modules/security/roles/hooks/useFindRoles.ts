import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { RoleService } from 'modules/security/roles/services';
import { ROLES_LIST_KEY } from 'modules/security/roles/constants/queries';
import { SPACE_TYPE, SPACE_TYPES_MAP } from 'modules/security/users/constants/space-types.constants';

export const useFindRolesTable = (type: SPACE_TYPE) => {
  const roleType = SPACE_TYPES_MAP[type];
  const { fetch, queryKey } = useTableRequest((params?: any) => RoleService.searchRolesByType(roleType, { ...params }));

  return useQuery([ROLES_LIST_KEY, type, queryKey], fetch, {
    enabled: !!roleType,
  });
};
