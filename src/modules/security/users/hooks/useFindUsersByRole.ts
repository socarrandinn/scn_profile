import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { UserAdminService } from '../services';
import { SPACE_TYPE } from '../constants/space-types.constants';
import { ClientsService } from 'modules/crm/clients/services';

export const useFindUsersByRole = (roleId: string, type: SPACE_TYPE) => {
  const searchFunctionByType = getSearchFunctionByType(type);

  const { fetch, queryKey } = useTableRequest(searchFunctionByType, {
    field: 'security.roles.role',
    value: roleId,
  });

  return useQuery(['users', `users-${roleId}`, queryKey], fetch);
};

const getSearchFunctionByType = (type: SPACE_TYPE) => {
  switch (type) {
    case SPACE_TYPE.ROOT:
      return UserAdminService.search;
    case SPACE_TYPE.PROVIDER:
      return UserAdminService.searchProviderUsers;
    default:
      return ClientsService.search;
  }
};
