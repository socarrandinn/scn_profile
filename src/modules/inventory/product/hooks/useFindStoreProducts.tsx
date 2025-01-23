import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from 'modules/inventory/product/services';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from '../constants/query-keys';

export const useFindProductsByStore = () => {
  const { warehouseId } = useWarehouseDetail();

  const filter = useMemo(() => {
    return new TermFilter({ field: 'stock.warehouse', value: warehouseId, objectId: true });
  }, [warehouseId]);

  const { fetch, queryKey, filters, search } = useTableRequest(ProductService.search, filter);
  const query = useQuery([PRODUCTS_WAREHOUSE_LIST_KEY, queryKey, filters, search], fetch, {
    enabled: !!warehouseId,
  });

  return {
    ...query,
    filters,
    search,
  };
};
