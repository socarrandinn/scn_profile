import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IOrderShippingDestinationSettings } from '../interfaces/IOrderShippingDestinationSettings';

class OrderShippingExpressDestinationService extends EntityApiService<IOrderShippingDestinationSettings> {
  searchAll = (): Promise<IOrderShippingDestinationSettings> => {
    return this.handleResponse(ApiClientService.get(this.getPath(''))) as Promise<IOrderShippingDestinationSettings>;
  };

  patchShippingDestinations = (payload: any) => {
    return this.handleResponse(
      ApiClientService.patch(this.getPath(''), payload),
    ) as Promise<IOrderShippingDestinationSettings>;
  };

  patchShippingExpressStore = (payload: any) => {
    return this.handleResponse(
      ApiClientService.patch(this.getPath(''), payload),
    ) as Promise<IOrderShippingDestinationSettings>;
  };
}

export default new OrderShippingExpressDestinationService('/ms-auth/api/shipping-express-settings');
