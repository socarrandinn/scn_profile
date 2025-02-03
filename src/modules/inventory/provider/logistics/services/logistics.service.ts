import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';

class LogisticsService extends EntityApiService<ILogistics> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<ILogistics>> => {
    const projections = {
      owner: 0,
      space: 0,
      language: 0,
      'security.roles': 0,
      updatedAt: 0,
      status: 0,
      tags: 0,
      id: 0,
    };
    return this.search({ ...params, projections }, config);
  };

  updateMany = (payload: any) => this.handleResponse(ApiClientService.patch(this.getPath('/updateMany'), payload));

  getOne = (logisticId: string, config?: RequestConfig | undefined) => {
    return this.handleResponse(
      ApiClientService.get(this.getPath(`/${logisticId}`), config).then((data) => {
        // const tags = mapperObjectToArrayTags(data?.data?.tags);
        return {
          ...data,
          data: {
            ...data.data,
            tags: {
              logistic: data?.data?.tags,
            },
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

  // delete in bulk
  deleteMany = (ids: string[]): any => {
    if (ids) {
      return ApiClientService.patch(this.getPath('/bulk/remove'), {
        ids,
      });
    }
    throw new Error('You must be inside a ids array');
  };

  // change visibility in bulk
  changeVisibilityMany = ({ ids, visible }: { ids: string[]; visible: string | boolean }): any => {
    if (ids) {
      return ApiClientService.patch(this.getPath('/bulk/visibility'), {
        ids,
        visible,
      });
    }
    throw new Error('You must be inside a ids array and visible');
  };

  productSearch = (params?: any, config?: RequestConfig): any => {
    const { logisticId, ...rest } = params;
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/${logisticId as string}/products/search`), rest, config),
    ).then();
  };
}

export default new LogisticsService('/ms-inventory/api/provider/logistics');
