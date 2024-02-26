import { EntityApiService } from '@dfl/react-security';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';

class HomeDeliveryService extends EntityApiService<IHomeDelivery> {}

export default new HomeDeliveryService('/ms-inventory/api/home-delivery');
