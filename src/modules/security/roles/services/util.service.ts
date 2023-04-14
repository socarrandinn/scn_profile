import { IRole } from '../interfaces';
import { ROLES_LIST_KEY } from 'modules/security/roles/constants/queries';
import { QueryClient } from '@tanstack/react-query';

export const invalidateRoleListQuery = (queryClient: QueryClient, role?: IRole) => {
  queryClient.invalidateQueries([ROLES_LIST_KEY]).then();
  if (role) {
    queryClient.invalidateQueries([role._id]).then();
  }
};
