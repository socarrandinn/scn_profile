import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IStock } from 'modules/inventory/store/interfaces';

class StockService extends EntityApiService<IStock> {
  getStockByProductId = (productId: string, config?: RequestConfig) => {
    if (!productId) return;
    return ApiClientService.get(this.getPath(`/${productId}/stock`), config);
  };

  getStockByProductIdAndStoreId = (productId: string, storeId: string, config?: RequestConfig) => {
    if (!productId || !storeId) return;
    return ApiClientService.get(this.getPath(`/${productId}/stock/${storeId}`), config);
  };
}

export default new StockService('/ms-inventory/api/products');
