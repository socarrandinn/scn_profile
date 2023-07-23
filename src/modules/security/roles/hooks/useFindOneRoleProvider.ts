import { useQuery } from '@tanstack/react-query';
import { RoleProvidersService } from 'modules/security/roles/services';
import { ROLES_PROVIDER_ONE_KEY } from 'modules/security/roles/constants/queries';
import { useCallback } from 'react';
import { IRoleProvider } from 'modules/security/roles/interfaces';

export const useFindOneRoleProvider = (id: string | null) => {
  const fetch = useCallback(() => RoleProvidersService.getOne(id as string), [id]);
  return useQuery<IRoleProvider>([id, ROLES_PROVIDER_ONE_KEY], fetch, { enabled: !!id });
};
