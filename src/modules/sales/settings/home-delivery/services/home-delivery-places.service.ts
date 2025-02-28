import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { DELIVERY_SERVICE, IDelivery } from 'modules/sales/settings/common/interfaces';

class HomeDeliveryPlacesService extends EntityApiService<IDelivery> {
  createGlobal(params: any, config?: RequestConfig) {
    return this.handleResponse(ApiClientService.patch('/ms-sales/api/shipping-home', params, config));
  }

  createBulk(params: any[]) {
    return this.handleResponse(ApiClientService.post(this.getPath('/bulk'), params));
  }

  toggleStatus(value: boolean) {
    return this.handleResponse(ApiClientService.patch(this.getPath('/status'), { enabled: !value }));
  }

  updatePriceConfig(apiPath: DELIVERY_SERVICE, params: any) {
    return this.handleResponse(
      ApiClientService.patch(`/ms-sales/api/${apiPath}/places/${params?._id as string}/price-config`, {
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

export default new HomeDeliveryPlacesService('/ms-sales/api/shipping-home/places');
