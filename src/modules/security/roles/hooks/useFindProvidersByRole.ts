import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { UserService } from 'modules/security/users/services';
import { ROLES_PROVIDERS_USERS_LIST_KEY } from '../constants/queries';

export const useFindProvidersByRole = (roleId: string | undefined) => {
  const { fetch, queryKey } = useTableRequest(UserService.search, {
    field: 'security.roles.role',
    value: roleId,
  });
  return useQuery([ROLES_PROVIDERS_USERS_LIST_KEY, ROLES_PROVIDERS_USERS_LIST_KEY, queryKey], fetch);
};
