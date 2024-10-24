import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { IWarehouseSupplier } from '../interfaces/IWarehouseSupplier';

class WarehouseSupplierService extends EntityApiService<IWarehouse> {
  addSupplier = (payload: IWarehouseSupplier, config?: RequestConfig) => {
    const { warehouse, ...rest } = payload;
    if (warehouse) {
      return ApiClientService.post(this.getPath(`/${warehouse}/supplier`), rest, config);
    }
    throw new Error('You must be inside a warehouse _id');
  };

  searchSupplierAvailable = (warehouse: string, params?: any, config?: RequestConfig) => {
    return ApiClientService.post(this.getPath(`/${warehouse}/supplier/supplier-available`), params, config);
  };
}

export default new WarehouseSupplierService('/ms-inventory/api/warehouse');
