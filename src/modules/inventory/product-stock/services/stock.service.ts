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
    const { item, ...rest } = params;
    if (item) {
      return ApiClientService.post(this.getPath(`/${(item?._id || item) as string}/stock`), rest);
    }
    return Promise.reject({
      message: 'You must need a productId',
    });
  };

  manyStock = (stocks: any) => {
    return ApiClientService.post(this.getPath('/stock/many'), stocks);
  };

  importStock = (payload: IStockWarehouseImport) => {
    const { warehouse, file } = payload;
    if (file && warehouse) {
      const formData = new FormData();
      formData.append('file', file, file?.name);
      formData.append('warehouse', warehouse as unknown as string);
      return this.handleResponse(ApiClientService.post(this.getPath('/stock/import'), formData));
    }
    return Promise.reject({
      message: 'You must need a file',
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
