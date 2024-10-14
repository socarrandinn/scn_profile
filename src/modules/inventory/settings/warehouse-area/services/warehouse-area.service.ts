import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IStoreArea } from 'modules/inventory/settings/warehouse-area/interfaces';

class WarehouseAreaService extends EntityApiService<IStoreArea> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IStoreArea>> => {
    params.projections = {
      description: 0,
    }
    return this.search(params, config)
  }
}

export default new WarehouseAreaService('/ms-inventory/api/warehouse-area');
