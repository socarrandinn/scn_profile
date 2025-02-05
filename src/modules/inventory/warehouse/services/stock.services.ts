import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { AddSpace } from 'modules/common/interceptors/add-space';
import { IStock } from 'modules/inventory/warehouse/interfaces';

class StockService extends EntityApiService<IStock> {
  getStockByProductId = (productId?: string, config?: RequestConfig) => {
    if (!productId) return;
    return ApiClientService.get(this.getPath(`/${productId}/stock`), config);
  };

  setStockByProductId = (productId: string, params?: any, config?: RequestConfig) => {
    if (!productId) return;
    return ApiClientService.post(this.getPath(`/${productId}/stock`), AddSpace(params, params?.warehouse), config);
  };

  getStockByProductIdAndStoreId = (productId: string, warehouseId: string, config?: RequestConfig) => {
    if (!productId || !warehouseId) return;
    return ApiClientService.get(this.getPath(`/${productId}/stock/${warehouseId}`), config);
  };
}

export default new StockService('/ms-inventory/api/products');
