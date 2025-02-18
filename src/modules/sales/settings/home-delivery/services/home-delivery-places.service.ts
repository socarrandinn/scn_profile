import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';

class HomeDeliveryPlacesService extends EntityApiService<IHomeDelivery> {
  createGlobal(params: any, config?: RequestConfig) {
    return this.handleResponse(ApiClientService.post(this.getPath('/global'), params, config));
  }

  createBulk(params: any[]) {
    return this.handleResponse(ApiClientService.post(this.getPath('/bulk'), params));
  }

  toggleStatus(value: boolean) {
    return this.handleResponse(ApiClientService.patch(this.getPath('/status'), { enabled: !value }));
  }
}

export default new HomeDeliveryPlacesService('/ms-sales/api/shipping-home/places');
