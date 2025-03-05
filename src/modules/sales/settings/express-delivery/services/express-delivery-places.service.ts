import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IDelivery } from 'modules/sales/settings/common/interfaces';

class ExpressDeliveryPlacesService extends EntityApiService<IDelivery> {
  createBulk (params: any[]) {
    return this.handleResponse(ApiClientService.post(this.getPath('/bulk'), params));
  }

  toggleStatus (value: boolean) {
    return this.handleResponse(ApiClientService.patch(this.getPath('/status'), { enabled: !value }));
  }

  updatePriceConfig (params: any) {
    return this.handleResponse(
      ApiClientService.patch(this.getPath(`/${params?._id as string}/price-config`), {
        ...params,
        enabled: !params?._id,
      }),
    );
  }

  saveOrUpdateCustom = (params?: any, config?: RequestConfig) => {
    if (params?._id) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${params?._id as string}/price-config`), params, config),
      );
    }
    return this.handleResponse(ApiClientService.post(this.getPath(''), params, config));
  };
}

export default new ExpressDeliveryPlacesService('/ms-sales/api/shipping-express/places');
