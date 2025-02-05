import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { COLLECTION_POSITION, DYNAMIC_COLLECTION_TYPE } from '../constants/collection-types';

export class CollectionCommonService<T> extends EntityApiService<T> {
  updateStatus = (collectionId: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${collectionId}/active`), {
      active: status,
    });
  };

  updateDynamicType = (collectionId: string, type: DYNAMIC_COLLECTION_TYPE): any => {
    return ApiClientService.patch(this.getPath(`/${collectionId}`), {
      settings: {
        type,
      },
    });
  };

  updatePosition = (collectionId: string, position: COLLECTION_POSITION): any => {
    return ApiClientService.patch(this.getPath(`/${collectionId}`), {
      position,
    });
  };
}
