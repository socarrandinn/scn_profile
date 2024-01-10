import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IStock } from 'modules/inventory/store/interfaces';

class StockService extends EntityApiService<IStock> {
  getStockByProductId = (productId: string, config?: RequestConfig) => {
    if (!productId) return;
    return ApiClientService.get(this.getPath(`/${productId}/stock`), config);
  };
}

export default new StockService('/ms-inventory/api/products');
