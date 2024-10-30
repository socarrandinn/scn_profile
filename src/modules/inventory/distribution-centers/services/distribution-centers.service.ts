import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IAddWarehouses, IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';

class DistributionCentersService extends EntityApiService<IDistributionCenters> {
  updateLocations = (locations: Partial<IDistributionCenters>) => {
    return ApiClientService.patch(this.getPath(`/${locations._id as string}/locations`), locations);
  };

  updateAddress = (address: Partial<IDistributionCenters>) => {
    return ApiClientService.patch(this.getPath(`/${address._id as string}/address`), address);
  };

  updateProvider = (provider: Partial<IDistributionCenters>) => {
    return ApiClientService.patch(this.getPath(`/${provider._id as string}/logistic`), provider);
  };

  updateContact = (contact: Partial<IDistributionCenters>) => {
    return ApiClientService.patch(this.getPath(`/${contact._id as string}/contacts`), contact);
  };

  searchProducts = (distributionCenterId: string, params: any, config: RequestConfig) => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/${distributionCenterId}/products/search`), params, config),
    );
  };

  // warehouses
  searchWarehouse = (distributionCenterId: string, params: any, config: RequestConfig) => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/${distributionCenterId}/warehouse/search`), params, config),
    );
  };

  addWarehouse = (payload: IAddWarehouses) => {
    const { distributionCenter, warehouses } = payload;

    const _warehouse = warehouses?.map((w) => ({ _id: w }));

    if (distributionCenter) {
      return ApiClientService.post(this.getPath(`/${distributionCenter}/warehouse`), _warehouse);
    }
    return Promise.reject(new Error('You must need a distributionCenterId'));
  };

  deleteWarehouse = (distributionCenterId: string, warehouseId: string) => {
    if (distributionCenterId && warehouseId) {
      return ApiClientService.patch(this.getPath(`/${distributionCenterId}/warehouse`), { _id: warehouseId });
    }
    return Promise.reject(new Error('You must need a distributionCenterId and warehouseId'));
  };
}

export default new DistributionCentersService('/ms-inventory/api/distribution-center');
