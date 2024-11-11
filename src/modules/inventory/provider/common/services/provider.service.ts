import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IProvider } from 'modules/security/roles/interfaces/IProvider';

class ProviderService extends EntityApiService<IProvider> {
  searchProvidersByType = (params?: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${params}/search`), params, config));
  };

  getOneByType = (id: string, params?: any) => {
    return this.handleResponse(ApiClientService.get(this.getPath(`/${params}/${id}`), params));
  };
}

export default new ProviderService('/ms-inventory/api/provider');
