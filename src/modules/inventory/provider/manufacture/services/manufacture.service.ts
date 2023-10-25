import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IManufacture } from 'modules/inventory/provider/manufacture/interfaces';

class ManufactureService extends EntityApiService<IManufacture> {
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

export default new ManufactureService('/ms-inventory/api/manufactures');
