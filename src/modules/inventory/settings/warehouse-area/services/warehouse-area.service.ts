import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';

class WarehouseAreaService extends EntityApiService<IWarehouseArea> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IWarehouseArea>> => {
    const projections = {
      description: 0,
    };
    return this.search({ ...params, projections }, config);
  };
}

export default new WarehouseAreaService('/ms-inventory/api/warehouse-area');
