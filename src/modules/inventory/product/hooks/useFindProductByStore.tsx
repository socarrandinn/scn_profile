import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from '../constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '../services';

export const useFindProductByStore = (warehouseId: string) => {
  const filter = useMemo(() => {
    return new TermFilter({ field: 'stock.warehouse', value: warehouseId, objectId: true });
  }, [warehouseId]);

  const { fetch, queryKey, filters } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_WAREHOUSE_LIST_KEY, queryKey], fetch, {
    enabled: !!warehouseId,
  });

  return {
    ...query,
    filters,
    warehouseId,
  };
};
