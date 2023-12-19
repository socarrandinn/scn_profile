import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_STORE_LIST_KEY } from '../constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '../services';

export const useFindStoreProducts = (storeId: string) => {
  const filter = useMemo(() => {
    return new TermFilter({ field: 'stores.store', value: storeId });
  }, [storeId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_STORE_LIST_KEY, queryKey], fetch, {
    enabled: !!storeId,
  });

  return {
    ...query,
    filters,
    storeId,
  };
};
