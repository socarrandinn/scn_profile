import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';

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

  getStores = (distributionCenterId: string) => {
    return ApiClientService.get(this.getPath(`/${distributionCenterId}/warehouses`));
  };
}

export default new DistributionCentersService('/ms-inventory/api/distribution-center');
