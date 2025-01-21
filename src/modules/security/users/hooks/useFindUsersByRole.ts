import UserServices from 'modules/account/services/account.services';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import userAdminServices from '../services/user-admin.services';

export const useFindUsersByRole = (roleId: string) => {
  const { fetch, queryKey } = useTableRequest(userAdminServices.search, {
    field: 'security.roles.role',
    value: roleId,
  });

  return useQuery(['users', `users-${roleId}`, queryKey], fetch);
};
