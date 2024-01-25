import { useMemo } from 'react';
import { InFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { LOGISTIC_PROVIDER_LIST_KEY } from '../constants';

export const useFindLogisticProducts = (logisticProviderId: string | undefined) => {
  const filter = useMemo(() => {
    return new InFilter({ field: 'stores.logistic', objectId: true, value: [logisticProviderId] });
  }, [logisticProviderId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([LOGISTIC_PROVIDER_LIST_KEY, queryKey], fetch, {
    enabled: !!logisticProviderId,
  });

  return {
    ...query,
    filters,
  };
};
