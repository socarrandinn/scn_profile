// import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_WAREHOUSE_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { WAREHOUSES_LIST_KEY } from '../constants';
import { ProductService } from 'modules/inventory/product/services';

export const useFindWarehouseStockByProductId = (productId: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    ProductService.searchWarehouseStock(productId, params, config),
  );

  return useQuery([PRODUCTS_WAREHOUSE_LIST_KEY, WAREHOUSES_LIST_KEY, queryKey], fetch, {
    enabled: !!productId,
  });
};
