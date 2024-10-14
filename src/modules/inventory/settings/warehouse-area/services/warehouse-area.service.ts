import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';

class WarehouseAreaService extends EntityApiService<IWarehouseArea> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IWarehouseArea>> => {
    params.projections = {
      description: 0,
    }
    return this.search(params, config)
  }
}

export default new WarehouseAreaService('/ms-inventory/api/warehouse-area');
