import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_WAREHOUSE_STOCK } from 'modules/inventory/product/constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { StockService } from 'modules/inventory/warehouse/services';

export const useFindProductStock = (productId?: string) => {
  const { fetch, queryKey } = useTableRequest(async () => await StockService.getStockByProductId(productId));

  const query = useQuery([PRODUCTS_WAREHOUSE_STOCK, queryKey, productId], fetch, {
    enabled: !!productId,
  });

  return {
    ...query,
  };
};
