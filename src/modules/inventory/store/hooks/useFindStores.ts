import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { StoreService } from 'modules/inventory/store/services';
import { STORES_LIST_KEY } from 'modules/inventory/store/constants';
import { useMemo } from 'react';
import compact from 'lodash/compact';
import { TermFilter } from '@dofleini/query-builder';

export const useFindStores = (logisticProviderId?: string) => {
  const filter = useMemo(() => {
    const storeFilter = { field: 'logistic._id', value: logisticProviderId, objectId: true };
    return logisticProviderId ? new TermFilter(storeFilter) : undefined;
  }, [logisticProviderId]);

  const { fetch, queryKey } = useTableRequest(StoreService.search, filter);

  return useQuery(compact([STORES_LIST_KEY, queryKey, logisticProviderId]), fetch);
};
