import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IStock, IStockWarehouseImport } from '../interfaces/IStock';

class StocksService extends EntityApiService<IStock> {
  updateEnabled = (productId: string, enabled: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${productId}`), { enabled });
  };

  updateStockEnabled = (productId: string, warehouseId: string, enabled: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${warehouseId}/${productId}`), { enabled });
  };

  save = (params: any, config?: RequestConfig): Promise<IStock> => {
    if (typeof params?.warehouse === 'object') params.warehouse = params?.warehouse._id;
    return this.handleResponse(ApiClientService.post(this.getPath(null), params, config));
  };

  // get stock by product and warehouse
  getStocks = (productId: string, warehouseId: string, params?: any) => {
    if (!productId) return;
    return ApiClientService.get(this.getPath(`/${productId}/stock/${warehouseId}`), params);
  };

  getFullStocks = (productId: string, params?: any) => {
    if (!productId) return;
    return ApiClientService.get(this.getPath(`/${productId}`), params);
  };

  // update stock by product
  updateStocks = (params: IStock) => {
    const { product, ...rest } = params;
    if (product) {
      return ApiClientService.post(this.getPath(`/${product?._id}/stock`), rest);
    }
    return Promise.reject({
      message: 'You must need a productId',
    });
  };

  manyStock = (stocks: any) => {
    return ApiClientService.post(this.getPath('/many'), stocks);
  };

  uploadStock = (payload: IStockWarehouseImport) => {
    const { warehouse, files } = payload; // todo - define pass warehouse value
    if (files && warehouse) {
      return this.handleResponse(ApiClientService.post(this.getPath('/upload-stock'), files));
    }
    return Promise.reject({
      message: 'You must need a formData',
    });
  };

  searchStockAudit = (product: string, params: any, config: RequestConfig) => {
    const payloadFinal = params
      ? JSON.parse(JSON.stringify(params).replace(/items\.warehouse/g, 'warehouse'))
      : undefined;
    const size = params?.size || 20;
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath(`-activity/${product}/search`), payloadFinal, config),
      size,
    );
  };
}

export default new StocksService('/ms-inventory/api/products');
