import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ICollection } from 'modules/cms/collections/interfaces';

class CollectionsService extends EntityApiService<ICollection> {
  updateStatus = (collectionId: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${collectionId}`), {
      active: status,
    });
  };
}

export default new CollectionsService('/ms-cms/api/collections');
