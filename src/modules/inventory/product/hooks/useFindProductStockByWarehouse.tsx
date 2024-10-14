import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_STORE_STOCK } from 'modules/inventory/product/constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { StockService } from 'modules/inventory/warehouse/services';

export const useFindProductStockByWarehouse = (productId: string, warehouseId: string) => {
  const { fetch, queryKey } = useTableRequest(
    async () => await StockService.getStockByProductIdAndStoreId(productId, warehouseId),
  );
  const query = useQuery([PRODUCTS_STORE_STOCK, queryKey, productId, warehouseId], fetch, {
    enabled: !!warehouseId,
  });

  return {
    ...query,
  };
};
