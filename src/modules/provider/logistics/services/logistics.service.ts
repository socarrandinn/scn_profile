import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { ILogistics } from 'modules/provider/logistics/interfaces';

class LogisticsService extends EntityApiService<ILogistics> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<ILogistics>> => {
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

export default new LogisticsService('/ms-inventory/api/logistic-provider');
