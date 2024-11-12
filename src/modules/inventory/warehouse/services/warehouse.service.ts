import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

class WarehouseService extends EntityApiService<IWarehouse> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IWarehouse>> => {
    params.projections = {
      updatedAt: 0,
      space: 0,
      description: 0,
      contacts: 0,
    };
    return this.search(params, config);
  };

  updateLocations = (locations: Partial<IWarehouse>) => {
    return ApiClientService.patch(this.getPath(`/${locations._id as string}/locations`), locations);
  };

  updateAddress = (address: Partial<IWarehouse>) => {
    return ApiClientService.patch(this.getPath(`/${address._id as string}/address`), address);
  };

  updateContact = (contact: Partial<IWarehouse>) => {
    return ApiClientService.patch(this.getPath(`/${contact._id as string}/contacts`), contact);
  };

  updateProvider = (provider: Partial<IWarehouse>) => {
    return ApiClientService.patch(this.getPath(`/${provider._id as string}/logistic`), provider);
  };

  updateVisibility = (id: string, provider: Partial<IWarehouse>) => {
    return ApiClientService.patch(this.getPath(`/${id}/visibility`), provider);
  };
}

export default new WarehouseService('/ms-inventory/api/warehouse');
