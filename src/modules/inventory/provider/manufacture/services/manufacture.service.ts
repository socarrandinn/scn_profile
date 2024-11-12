import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IManufacture } from 'modules/inventory/provider/manufacture/interfaces';

class ManufactureService extends EntityApiService<IManufacture> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IManufacture>> => {
    params.projections = {
      owner: 0,
      space: 0,
      language: 0,
      'security.roles': 0,
      updatedAt: 0,
      id: 0,
    };
    return this.search(params, config);
  };

  searchInclude = async (params?: any, config?: RequestConfig): Promise<SearchResponseType<string>> => {
    const search = params.search;
    const data = search ? [search] : [];
    return {
      data,
      hasMore: true,
      total: 2,
    };
  };
}

export default new ManufactureService('/ms-inventory/api/provider/manufactures');
