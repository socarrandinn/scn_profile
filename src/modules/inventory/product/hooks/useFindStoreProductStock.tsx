import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_WAREHOUSE_STOCK } from 'modules/inventory/product/constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { StockService } from 'modules/inventory/warehouse/services';

export const useFindStoreProductStock = (productId: string, warehouseId: string) => {
  const { fetch, queryKey } = useTableRequest(
    async () => await StockService.getStockByProductIdAndStoreId(productId, warehouseId),
  );
  const query = useQuery([PRODUCTS_WAREHOUSE_STOCK, productId, warehouseId, queryKey], fetch, {
    enabled: !!warehouseId,
  });

  return {
    ...query,
  };
};
