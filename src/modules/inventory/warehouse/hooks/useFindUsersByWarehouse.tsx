import { useTableRequest } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { useQuery } from '@tanstack/react-query';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { UserService } from 'modules/security/users/services';
import { useMemo } from 'react';

export const useFindUsersByWarehouse = (distributionCenterId?: string) => {
  const filters = useMemo(
    () => new TermFilter({ field: 'security.roles.warehouse', value: distributionCenterId, objectId: true }),
    [distributionCenterId],
  );
  const { fetch, queryKey } = useTableRequest(UserService.search, filters);
  return useQuery([USERS_LIST_KEY, queryKey, distributionCenterId], fetch, { enabled: !!distributionCenterId });
};
