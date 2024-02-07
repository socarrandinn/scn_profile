import { EntityApiService } from '@dfl/react-security';
import { IStorePickup } from '../interfaces';

class StorePickupPlaceService extends EntityApiService<IStorePickup> {

  
}

export default new StorePickupPlaceService('/ms-sales/api/pickup-at-store/places');
