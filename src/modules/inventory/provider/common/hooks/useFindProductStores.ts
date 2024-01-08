import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { InFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { PRODUCT_STORES_LIST_KEY } from '../constants/querys';
import { StockService } from 'modules/inventory/store/services';

export const useFindProductStores = (productId: string | undefined, stores?: string[]) => {
  const filters = useMemo(() => {
    if (stores) {
      return new OperatorFilter({
        type: 'AND',
        filters: [
          new InFilter({ field: 'store', objectId: true, value: stores, type: 'IN' }),
          new TermFilter({ field: 'item', value: productId, objectId: true }),
        ],
      }).toQuery();
    }
    return new TermFilter({
      field: 'item',
      value: productId,
      objectId: true,
    }).toQuery();
  }, [productId, stores]);

  const { fetch, queryKey } = useTableRequest(StockService.search, filters);

  return useQuery([PRODUCT_STORES_LIST_KEY, queryKey, productId], fetch, { enabled: !!productId });
};

export const useFindProductStoresOneFilter = (productId: string | undefined, stores?: string[]) => {
  const filters = useMemo(() => {
    if (stores) {
      return new OperatorFilter({
        type: 'AND',
        filters: [
          new InFilter({ field: 'store', objectId: true, value: stores, type: 'IN' }),
          new TermFilter({ field: 'item', value: productId, objectId: true }),
        ],
      }).toQuery();
    }
    return new TermFilter({
      field: 'item',
      value: productId,
      objectId: true,
    }).toQuery();
  }, [productId, stores]);

  return useQuery([PRODUCT_STORES_LIST_KEY, productId], () => StockService.search({ filters }), {
    enabled: !!productId && !!stores,
  });
};
