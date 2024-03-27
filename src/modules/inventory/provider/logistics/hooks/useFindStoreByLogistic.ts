import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { StoreService } from 'modules/inventory/store/services';
import { LOGISTIC_STORES } from 'modules/inventory/provider/logistics/constants';

export const useFindStoresByLogistic = (logisticId: string) => {
  console.log(logisticId);

  const filter = useMemo(() => {
    return new TermFilter({ field: 'logistic._id', value: logisticId, objectId: true });
  }, [logisticId]);

  const { fetch, queryKey, filters } = useTableRequest(StoreService.search, filter);
  const query = useQuery([LOGISTIC_STORES, queryKey, logisticId], fetch, {
    enabled: !!logisticId,
  });

  return {
    ...query,
    filters,
  };
};
