import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ICollection } from 'modules/cms/collections/interfaces';
import { DYNAMIC_COLLECTION_TYPE } from '../constants/collection-types';

class CollectionsService extends EntityApiService<ICollection> {
  updateStatus = (collectionId: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${collectionId}`), {
      active: status,
    });
  };

  updateDynamicType = (collectionId: string, type: DYNAMIC_COLLECTION_TYPE): any => {
    return ApiClientService.patch(this.getPath(`/${collectionId}`), {
      type,
    });
  };
}

export default new CollectionsService('/ms-cms/api/collections');
