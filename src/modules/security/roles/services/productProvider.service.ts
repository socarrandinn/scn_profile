import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IProvider } from '../interfaces/IProvider';

class ProductProvidersService extends EntityApiService<IProvider> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IProvider>> => {
    params.projections = {
      owner: 0,
      space: 0,
      language: 0,
      'security.roles': 0,
      createdAt: 0,
      updatedAt: 0,
      status: 0,
      id: 0,
    };
    return this.search(params, config);
  };
}

export default new ProductProvidersService('/ms-inventory/api/product-provider');
