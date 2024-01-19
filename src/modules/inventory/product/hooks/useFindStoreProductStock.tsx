import { useTableRequest } from '@dfl/mui-admin-layout';
import { PRODUCTS_STORE_STOCK } from 'modules/inventory/product/constants/query-keys';
import { useQuery } from '@tanstack/react-query';
import { StockService } from 'modules/inventory/store/services';
import { useStoreContext } from 'modules/inventory/provider/supplier/context/StoreProvider';

export const useFindStoreProductStock = (productId: string) => {
  const { storeId } = useStoreContext();

  const { fetch, queryKey } = useTableRequest(
    async () => await StockService.getStockByProductIdAndStoreId(productId, storeId),
  );
  const query = useQuery([PRODUCTS_STORE_STOCK, queryKey], fetch, {
    enabled: !!storeId,
  });

  return {
    ...query,
  };
};
