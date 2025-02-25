import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IDelivery } from '../../home-delivery/interfaces';

class ExpressDeliveryService extends EntityApiService<IDelivery> {
  getSettings() {
    return this.handleResponse(ApiClientService.get(this.getPath('')));
  }
}

export default new ExpressDeliveryService('/ms-inventory/api/shipping-express');
