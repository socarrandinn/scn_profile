import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';

class HomeDeliveryPlacesService extends EntityApiService<IHomeDelivery> {
  creteBulk (params: any[]) {
    return this.handleResponse(
      ApiClientService.post(this.getPath('/bulk'), params),
    );
  }

  toggleStatus (value: boolean) {
    return this.handleResponse(
      ApiClientService.patch(this.getPath('/status'), { enabled: !value }),
    );
  }
}

export default new HomeDeliveryPlacesService('/ms-sales/api/shipping-home/places');
