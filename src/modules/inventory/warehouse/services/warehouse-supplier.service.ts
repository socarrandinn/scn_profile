import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { IPriceConfigUpdate, IWarehouseSupplier } from '../interfaces/IWarehouseSupplier';

class WarehouseSupplierService extends EntityApiService<IWarehouse> {
  addSupplier = (payload: IWarehouseSupplier, config?: RequestConfig) => {
    const { warehouse, ...rest } = payload;
    if (warehouse) {
      return ApiClientService.post(this.getPath(`/${warehouse as unknown as string}/supplier`), rest, config);
    }
    throw new Error('You must be inside a warehouse _id');
  };

  searchSupplierAvailable = (warehouse: string, params?: any, config?: RequestConfig) => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/${warehouse}/supplier/supplier-available`), params, config),
    );
  };

  searchSupplier = (warehouse: string, params?: any, config?: RequestConfig) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${warehouse}/supplier/search`), params, config));
  };

  deleteSupplier = (warehouse: string, supplier: string, config?: RequestConfig) => {
    return ApiClientService.delete(this.getPath(`/${warehouse}/supplier/${supplier}`), config);
  };

  updateVisibility = (warehouse: string, supplier: string, params?: any) => {
    return this.handleResponse(
      ApiClientService.patch(this.getPath(`/${warehouse}/supplier/${supplier}/visibility`), params),
    );
  };

  updateCommission = (payload: IPriceConfigUpdate, config?: RequestConfig) => {
    const { supplier, warehouse, priceConfig } = payload;
    return this.handleResponse(
      ApiClientService.patch(this.getPath(`/${warehouse}/supplier/${supplier}/price-config`), { priceConfig }, config),
    );
  };
}

export default new WarehouseSupplierService('/ms-inventory/api/warehouse');
