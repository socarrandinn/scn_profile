// import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_WAREHOUSE_STOCK } from 'modules/inventory/product/constants/query-keys';
import { ProductService } from 'modules/inventory/product/services';

export const useFindWarehouseStockByProductId = (productId: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    ProductService.searchWarehouseStock(productId, params, config),
  );

  return useQuery([PRODUCTS_WAREHOUSE_STOCK, queryKey], fetch, {
    enabled: !!productId,
  });
};
