import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ICollectionElement } from '../interfaces';

export class CollectionElementCommonService<T> extends EntityApiService<T> {
  add = (payload: ICollectionElement): any => {
    const { collectionId, elements } = payload;
    if (collectionId) {
      return ApiClientService.post(this.getPath(`/${collectionId}/elements`), {
        elements,
      });
    }
    throw new Error('required collectionId');
  };

  remove = (payload: ICollectionElement): any => {
    const { collectionId, elements } = payload;
    if (collectionId && elements) {
      return ApiClientService.delete(this.getPath(`/${collectionId}/elements`), {
        data: {
          elements,
        },
      });
    }
    throw new Error('required collectionId and elements');
  };

  search = (collectionId: string, params?: any, config?: RequestConfig): any => {
    const size = params?.size || 20;
    if (collectionId) {
      return this.handleSearchResponse(
        ApiClientService.post(this.getPath(`/${collectionId}/elements/search`), { ...params, populate: true }, config),
        size,
      );
    }
  };
}
