import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IStorePickup } from '../interfaces';

class StorePickupService extends EntityApiService<IStorePickup> {
  getStorePickup = () => {
    return ApiClientService.get(this.getPath(''));
  };

  updateStatus = (enabled: boolean): any => {
    return ApiClientService.patch(this.getPath('/status'), {
      enabled,
    });
  };

  getPointPlaces = (): any => {
    return this.handleResponse(ApiClientService.post(this.getPath('/places'), {}));
  };
}

export default new StorePickupService('/ms-sales/api/pickup-at-store');
