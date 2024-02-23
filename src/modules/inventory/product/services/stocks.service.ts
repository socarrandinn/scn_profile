import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IStock } from '../interfaces/IStock';

class StocksService extends EntityApiService<IStock> {
  updateEnabled = (productId: string, enabled: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${productId}`), { enabled });
  };

  updateStockEnabled = (productId: string, storeId: string, enabled: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${storeId}/${productId}`), { enabled });
  };

  save = (params: any, config?: RequestConfig): Promise<IStock> => {
    if (typeof params?.store === 'object') params.store = params?.store._id;
    return this.handleResponse(ApiClientService.post(this.getPath(null), params, config));
  };

  // get stock by product and store
  getStocks = (productId: string, storeId: string, params?: any) => {
    if (!productId) return;
    return ApiClientService.get(this.getPath(`/${productId}/stock/${storeId}`), params);
  };

  getFullStocks = (productId: string, params?: any) => {
    if (!productId) return;
    return ApiClientService.get(this.getPath(`/${productId}`), params);
  };

  // update stock by product
  updateStocks = (params: IStock) => {
    const { productId, ...rest } = params;
    return ApiClientService.post(this.getPath(`/${productId}/stock`), rest);
  };

  manyStock = (stoks: any) => {
    return ApiClientService.post(this.getPath('/many'), stoks);
  };

  uploadStock = (files: FormData) => {
    if (files) {
      return this.handleResponse(ApiClientService.post(this.getPath('/upload-stock'), files));
    }
    return Promise.reject({
      message: 'You must need a formData',
    });
  };

  searchStockAudit = (product: string, params: any, config: RequestConfig) => {
    const payloadFinal = params ? JSON.parse(JSON.stringify(params).replace(/items\.store/g, 'store')) : undefined;
    const size = params?.size || 20;
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath(`-activity/${product}/search`), payloadFinal, config),
      size,
    );
  };
}

export default new StocksService('/ms-inventory/api/products');
