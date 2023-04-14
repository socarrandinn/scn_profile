import { useQuery } from '@tanstack/react-query';
import { RoleService } from 'modules/security/roles/services';
import { ROLES_ONE_KEY } from 'modules/security/roles/constants/queries';
import { useCallback } from 'react';
import { IRole } from 'modules/security/roles/interfaces';

export const useFindOneRoles = (id: string | null) => {
  const fetch = useCallback(() => RoleService.getOne(id as string), [id]);
  return useQuery<IRole>([id, ROLES_ONE_KEY], fetch, { enabled: !!id });
};
