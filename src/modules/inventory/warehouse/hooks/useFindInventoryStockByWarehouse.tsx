import { useTableRequest } from '@dfl/mui-admin-layout';
import { WarehouseService } from '../services';
import { useQuery } from '@tanstack/react-query';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { WAREHOUSE_PRODUCTS_STOCK } from '../constants';

export const useFindInventoryStockByWarehouse = (warehouseId: string, providerId?: string) => {
  const filter = useMemo(() => {
    if (providerId) {
      return new TermFilter({ field: 'providers.supplier._id', value: providerId, objectId: true });
    }
    return undefined;
  }, [providerId]);

  const { fetch, queryKey, filters, search } = useTableRequest(
    (params, config) => WarehouseService.searchInventoryStock(warehouseId, params, config),
    filter,
  );
  const query = useQuery([WAREHOUSE_PRODUCTS_STOCK, queryKey, filters, search, warehouseId], fetch, {
    enabled: !!warehouseId,
  });

  return {
    ...query,
    filters,
    search,
  };
};
