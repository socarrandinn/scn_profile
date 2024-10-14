import { EntityApiService } from '@dfl/react-security';
import { IWarehousePickup } from '../interfaces';

class WarehousePickupPlaceService extends EntityApiService<IWarehousePickup> {

}

export default new WarehousePickupPlaceService('/ms-sales/api/pickup-at-warehouse/places');
