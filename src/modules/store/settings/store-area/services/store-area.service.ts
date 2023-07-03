import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IStoreArea } from 'modules/store/settings/store-area/interfaces';

class StoreAreaService extends EntityApiService<IStoreArea> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IStoreArea>> => {
    params.projections = {
      description: 0,
    }
    return this.search(params, config)
  }
}

export default new StoreAreaService('/ms-inventory/api/store-area');
