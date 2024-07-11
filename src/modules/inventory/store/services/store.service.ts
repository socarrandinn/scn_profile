import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IStore } from 'modules/inventory/store/interfaces';

class StoreService extends EntityApiService<IStore> {
  updateLocations = (locations: Partial<IStore>) => {
    return ApiClientService.patch(this.getPath(`/${locations._id as string}/locations`), locations);
  };

  updateAddress = (address: Partial<IStore>) => {
    return ApiClientService.patch(this.getPath(`/${address._id as string}/address`), address);
  };

  updateContact = (contact: Partial<IStore>) => {
    return ApiClientService.patch(this.getPath(`/${contact._id as string}/contacts`), contact);
  };

  updateProvider = (provider: Partial<IStore>) => {
    return ApiClientService.patch(this.getPath(`/${provider._id as string}/logistic`), provider);
  };
}

export default new StoreService('/ms-inventory/api/stores');
