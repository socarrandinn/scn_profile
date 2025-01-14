import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ICollection } from 'modules/cms/collections/interfaces';

class CollectionBannerService extends EntityApiService<ICollection> {
  updateStatus = (bannerId: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${bannerId}`), {
      enabled: status,
    });
  };
}

export default new CollectionBannerService('/ms-cms/api/banners');
