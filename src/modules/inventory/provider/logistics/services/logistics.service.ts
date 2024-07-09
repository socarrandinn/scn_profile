import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { mapperObjectToArrayTags } from 'modules/inventory/settings/tags/services/tags-mapper';

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

  updateMany = (payload: any) => this.handleResponse(ApiClientService.patch(this.getPath('/updateMany'), payload));

  getOne = (logisticId: string, config?: RequestConfig | undefined) => {
    return this.handleResponse(
      ApiClientService.get(this.getPath(`/${logisticId}`), config).then((data) => {
        const tags = mapperObjectToArrayTags(data?.data?.tags);
        return {
          ...data,
          data: {
            ...data.data,
            tags,
          },
        };
      }),
    );
  };

  // update tags
  updateTags = (payload: Partial<ILogistics>): any => {
    const { _id, tags } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}`), {
        tags,
      });
    }
    throw new Error('You must be inside a _id');
  };
}

export default new LogisticsService('/ms-inventory/api/provider/logistics');
