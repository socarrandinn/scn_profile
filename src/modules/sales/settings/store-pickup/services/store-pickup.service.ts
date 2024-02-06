import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IStorePickup } from '../interfaces';

class StorePickupService extends EntityApiService<IStorePickup> {
  getStorePickup = () => {
    return ApiClientService.get(this.getPath(''))
  };
}

export default new StorePickupService('/ms-sales/api/pickup-at-store');
