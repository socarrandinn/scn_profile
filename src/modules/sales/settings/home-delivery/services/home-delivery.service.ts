import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

class HomeDeliveryService extends EntityApiService<IDelivery> {
  getSettings(params?: any) {
    return this.handleResponse(ApiClientService.get(this.getPath(''), params));
  }

  toggleStatus(value: boolean) {
    return this.handleResponse(ApiClientService.patch(this.getPath('/status'), { enabled: !value }));
  }
}

export default new HomeDeliveryService('/ms-sales/api/shipping-home');
