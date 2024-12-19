import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { useMemo } from 'react';
import compact from 'lodash/compact';
import { TermFilter } from '@dofleini/query-builder';

export const useFindStores = (logisticProviderId?: string) => {
  const filter = useMemo(() => {
    const storeFilter = { field: 'logistic._id', value: logisticProviderId, objectId: true };
    return logisticProviderId ? new TermFilter(storeFilter) : undefined;
  }, [logisticProviderId]);

  const { fetch, queryKey, filters, search } = useTableRequest(WarehouseService.searchClean, filter);

  const query = useQuery(compact([WAREHOUSES_LIST_KEY, queryKey, logisticProviderId]), fetch);

  return {
    ...query,
    filters,
    search,
  };
};
