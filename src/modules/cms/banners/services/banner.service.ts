import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IBanner } from '../interfaces/IBanner';

class BannerService extends EntityApiService<IBanner> {
  updateStatus = (bannerId: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${bannerId}`), {
      enabled: status,
    });
  };
}

export default new BannerService('/ms-cms/api/banners');
