import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';

class AdvertisementService extends EntityApiService<IAdvertisement> {
  updateGotIt = (id: string): Promise<IAdvertisement> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${id}/got-it`), {}));
  };
}

export default new AdvertisementService('/ms-rrhh/api/advertisements');
