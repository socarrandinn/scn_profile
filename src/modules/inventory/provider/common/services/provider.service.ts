import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IProvider } from 'modules/security/roles/interfaces/IProvider';

class ProviderService extends EntityApiService<IProvider> {
  searchProvidersByType = (params: string, config?: RequestConfig) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${params}/search`), params, config));
  };

  getOneByType = (id: string, params: string) => {
    return this.handleResponse(ApiClientService.get(this.getPath(`/${params}/${id}`)));
  };
}

export default new ProviderService('/ms-inventory/api/provider');
