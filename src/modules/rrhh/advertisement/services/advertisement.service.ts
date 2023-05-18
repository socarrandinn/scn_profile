import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';

class AdvertisementService extends EntityApiService<IAdvertisement> {
  updateGotIt = (id: string): Promise<IAdvertisement> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${id}/got-it`), {}));
  };

  searchAdmin = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IAdvertisement>> => {
    const size = params?.size || 20;
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/search-admin'), params, config), size);
  };
}

export default new AdvertisementService('/ms-rrhh/api/advertisements');
