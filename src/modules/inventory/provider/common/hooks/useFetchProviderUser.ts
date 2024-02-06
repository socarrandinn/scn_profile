import { useTableRequest } from '@dfl/mui-admin-layout';
import { AdvanceTermFilter, ExistFilter, OperatorFilter } from '@dofleini/query-builder';
import { UserService } from 'modules/security/users/services';
import { useMemo } from 'react';

export const useFetchProviderUser = () => {
  const filters = useMemo(
    () =>
      new OperatorFilter({
        type: 'AND',
        filters: [
          new ExistFilter({ field: 'security.roles.provider', value: false }),
          new AdvanceTermFilter({ type: 'NE', field: 'security.roles.isAdmin', value: true }),
        ],
      }),
    [],
  );

  return useTableRequest(UserService.search, filters);
};
