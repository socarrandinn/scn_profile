import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IDelivery } from 'modules/sales/settings/home-delivery/interfaces';

class HomeDeliveryService extends EntityApiService<IDelivery> {
  getSettings() {
    return this.handleResponse(ApiClientService.get(this.getPath('')));
  }

  toggleStatus(value: boolean) {
    return this.handleResponse(ApiClientService.patch(this.getPath('/status'), { enabled: !value }));
  }
}

export default new HomeDeliveryService('/ms-sales/api/shipping-home');
