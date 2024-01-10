import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { STORE_PRODUCTS_ONE_KEY } from 'modules/inventory/product/constants';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';

export const useFindProductsByStore = () => {
  const { storeId } = useStoreDetail();

  const filter = useMemo(() => {
    const storeFilter = { field: 'stock.store', value: storeId };
    return new TermFilter(storeFilter);
  }, [storeId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([STORE_PRODUCTS_ONE_KEY, queryKey], fetch, {
    enabled: !!storeId,
  });

  return {
    ...query,
    filters,
  };
};
