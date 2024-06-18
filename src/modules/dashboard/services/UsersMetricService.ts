import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';

class UsersMetricService extends EntityApiService<any> {
  getAll = (params?: any, config?: RequestConfig): Promise<any> => {
    return this.handleResponse(ApiClientService.post(this.getPath(''), params, config));
  };
}

export default new UsersMetricService('/ms-auth/api/analytics/user/user-summary');
