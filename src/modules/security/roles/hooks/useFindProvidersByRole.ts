import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ROLES_PROVIDERS_USERS_LIST_KEY } from '../constants/queries';
import { UserProvidersService } from 'modules/security/user-providers/services';

export const useFindProvidersByRole = (roleId: string | undefined) => {
  const { fetch, queryKey } = useTableRequest(UserProvidersService.search, {
    field: 'security.roles.role',
    value: roleId,
  });
  return useQuery([ROLES_PROVIDERS_USERS_LIST_KEY, ROLES_PROVIDERS_USERS_LIST_KEY, queryKey], fetch);
};
