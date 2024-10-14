import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { InFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { PRODUCT_WAREHOUSES_LIST_KEY } from '../constants/querys';
import { StockService } from 'modules/inventory/warehouse/services';

export const useFindProductWarehouses = (productId: string | undefined, warehouses?: string[]) => {
  const filters = useMemo(() => {
    if (warehouses) {
      return new OperatorFilter({
        type: 'AND',
        filters: [
          new InFilter({ field: 'warehouse', objectId: true, value: warehouses, type: 'IN' }),
          new TermFilter({ field: 'item', value: productId, objectId: true }),
        ],
      }).toQuery();
    }
    return new TermFilter({
      field: 'item',
      value: productId,
      objectId: true,
    }).toQuery();
  }, [productId, warehouses]);

  const { fetch, queryKey } = useTableRequest(StockService.search, filters);

  return useQuery([PRODUCT_WAREHOUSES_LIST_KEY, queryKey, productId], fetch, { enabled: !!productId });
};

export const useFindProductWarehousesOneFilter = (productId: string | undefined, warehouses?: string[]) => {
  const filters = useMemo(() => {
    if (warehouses) {
      return new OperatorFilter({
        type: 'AND',
        filters: [
          new InFilter({ field: 'warehouse', objectId: true, value: warehouses, type: 'IN' }),
          new TermFilter({ field: 'item', value: productId, objectId: true }),
        ],
      }).toQuery();
    }
    return new TermFilter({
      field: 'item',
      value: productId,
      objectId: true,
    }).toQuery();
  }, [productId, warehouses]);

  return useQuery([PRODUCT_WAREHOUSES_LIST_KEY, productId], () => StockService.search({ filters }), {
    enabled: !!productId && !!warehouses,
  });
};
