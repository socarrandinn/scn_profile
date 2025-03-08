import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

class HomeDeliveryService extends EntityApiService<IDelivery> {
  getSettings(params?: any) {
    return this.handleResponse(ApiClientService.get(this.getPath(''), params));
  }

  getCenterSettings(id: string, params?: any) {
    return this.handleResponse(ApiClientService.get(`/ms-sales/api/distribution-centers/${id}/shipping-home`, params));
  }

  toggleStatus(value: boolean, centerId?: string) {
    if (centerId) {
      return this.handleResponse(
        ApiClientService.patch(`/ms-sales/api/distribution-centers/${centerId}/shipping-home/status`, {
          enabled: !value,
        }),
      );
    }
    return this.handleResponse(ApiClientService.patch(this.getPath('/status'), { enabled: !value }));
  }
}

export default new HomeDeliveryService('/ms-sales/api/shipping-home');
