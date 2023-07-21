import UserServices from 'modules/security/users/services/user.services';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindProvidersByRole = (roleId: string) => {
  const { fetch, queryKey } = useTableRequest(UserServices.search, {
    field: 'security.roles.role',
    value: roleId,
  });

  return useQuery(['providers', `providers-${roleId}`, queryKey], fetch);
};
