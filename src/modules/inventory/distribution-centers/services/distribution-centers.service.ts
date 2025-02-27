import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IAddWarehouses, IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';

class DistributionCentersService extends EntityApiService<IDistributionCenters> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IDistributionCenters>> => {
    const projections = {
      contacts: 0,
      description: 0,
      updatedAt: 0,
      owner: 0,
      space: 0,
    };
    return this.search({ ...params, projections }, config);
  };

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
  searchWarehouses = (distributionCenterId: string, params: any, config: RequestConfig) => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/${distributionCenterId}/warehouse/search`), params, config),
    );
  };

  addWarehouse = (payload: IAddWarehouses) => {
    const { distributionCenter, warehouses } = payload;

    const _warehouse = warehouses?.map((w) => ({ _id: w }));

    if (distributionCenter) {
      return ApiClientService.patch(this.getPath(`/${distributionCenter}/warehouse/add`), _warehouse);
    }
    return Promise.reject(new Error('You must need a distributionCenterId'));
  };

  removeWarehouse = (distributionCenterId: string, warehouses: string[]) => {
    if (distributionCenterId && warehouses.length) {
      const _warehouses = warehouses?.map((w) => ({ _id: w }));

      return ApiClientService.patch(this.getPath(`/${distributionCenterId}/warehouse/remove`), _warehouses);
    }
    return Promise.reject(new Error('You must need a distributionCenterId and warehouses'));
  };

  updateVisibility = (id: string, provider: Partial<IDistributionCenters>) => {
    return ApiClientService.patch(this.getPath(`/${id}/visibility`), provider);
  };

  updateCommission = (params: Partial<IDistributionCenters>) => {
    return ApiClientService.patch(this.getPath(`/${params?._id as string}/handling-cost`), params);
  };

  changeVisibilityMany = ({ ids, visible }: { ids: string[]; visible: string | boolean }): any => {
    if (ids) {
      return ApiClientService.patch(this.getPath('/bulk/visibility'), {
        ids,
        visible,
      });
    }
    throw new Error('You must be inside a ids array and visible');
  };

  deletedMany = (ids: string[]): any => {
    if (ids) {
      return ApiClientService.patch(this.getPath('/bulk/remove'), {
        ids,
      });
    }
    throw new Error('You must be inside a ids array and visible');
  };
}

export default new DistributionCentersService('/ms-inventory/api/distribution-center');
