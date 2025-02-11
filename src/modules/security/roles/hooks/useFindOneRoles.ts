import { useQuery } from '@tanstack/react-query';
import { RoleService } from 'modules/security/roles/services';
import { ROLES_ONE_KEY } from 'modules/security/roles/constants/queries';
import { useCallback, useMemo } from 'react';
import { IRole } from 'modules/security/roles/interfaces';
import { SPACE_TYPE, SPACE_TYPES_MAP } from 'modules/security/users/constants/space-types.constants';

export const useFindOneRoles = (type: SPACE_TYPE, id: string | null) => {
  const service = useMemo(() => SPACE_TYPES_MAP[type], [type]);

  const fetch = useCallback(() => RoleService.getOneRoleByType(service, id as string), [id]);
  return useQuery<IRole>([id, ROLES_ONE_KEY], fetch, { enabled: !!id });
};
