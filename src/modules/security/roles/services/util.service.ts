import { IRole, IRoleProvider } from '../interfaces';
import { ROLES_LIST_KEY, ROLES_PROVIDERS_LIST_KEY } from 'modules/security/roles/constants/queries';
import { QueryClient } from '@tanstack/react-query';

export const invalidateRoleListQuery = (queryClient: QueryClient, role?: IRole) => {
  queryClient.invalidateQueries([ROLES_LIST_KEY]).then();
  if (role) {
    queryClient.invalidateQueries([role._id]).then();
  }
};

export const invalidateRoleProviderListQuery = (queryClient: QueryClient, role?: IRoleProvider) => {
  queryClient.invalidateQueries([ROLES_PROVIDERS_LIST_KEY]).then();
  if (role) {
    queryClient.invalidateQueries([role._id]).then();
  }
};

