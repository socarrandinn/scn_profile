import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

class ExpressDeliveryService extends EntityApiService<IDelivery> {
  getSettings() {
    return this.handleResponse(ApiClientService.get(this.getPath('')));
  }

  toggleStatus(value: boolean) {
    return this.handleResponse(ApiClientService.patch(this.getPath('/status'), { enabled: !value }));
  }

  createGlobal(params: any, config?: RequestConfig) {
    return this.handleResponse(ApiClientService.patch(this.getPath(''), params, config));
  }
}

export default new ExpressDeliveryService('/ms-sales/api/shipping-express');
