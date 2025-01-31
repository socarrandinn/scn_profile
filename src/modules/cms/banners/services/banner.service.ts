import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IBanner, IBannerCollectionCreate } from '../interfaces/IBanner';

class BannerService extends EntityApiService<IBanner> {
  updateStatus = (bannerId: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${bannerId}`), {
      enabled: status,
    });
  };

  addElementBanner = (payload: IBannerCollectionCreate): any => {
    return ApiClientService.post(this.getPath(`/collection/${payload?.collectionId}`), {
      banner: payload?.banner,
    });
  };
}

export default new BannerService('/ms-cms/api/banners');
