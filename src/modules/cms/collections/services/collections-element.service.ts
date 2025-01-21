import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ICollection, ICollectionElement } from 'modules/cms/collections/interfaces';

class CollectionElementsService extends EntityApiService<ICollection> {
  add = (payload: ICollectionElement): any => {
    const { collectionId, elements } = payload;
    if (collectionId) {
      return ApiClientService.patch(this.getPath(`/${collectionId}/elements/add`), {
        elements,
      });
    }
    throw new Error('required collectionId');
  };

  remove = (collectionId: string, elements: ICollectionElement): any => {
    return ApiClientService.patch(this.getPath(`/${collectionId}/elements/remove`), {
      elements,
    });
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

export default new CollectionElementsService('/ms-cms/api/collections');
