import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { useStoreDetail } from 'modules/inventory/warehouse/context/StoreContext';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from '../constants/query-keys';

export const useFindProductsByStore = () => {
  const { warehouseId } = useStoreDetail();

  const filter = useMemo(() => {
    const storeFilter = { field: 'stock.store', value: warehouseId };
    return new TermFilter(storeFilter);
  }, [warehouseId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_WAREHOUSE_LIST_KEY, queryKey], fetch, {
    enabled: !!warehouseId,
  });

  return {
    ...query,
    filters,
  };
};
