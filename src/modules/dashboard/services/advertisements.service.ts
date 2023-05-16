import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IAdvertisements } from 'modules/dashboard/interfaces';

class AdvertisementsService extends EntityApiService<IAdvertisements> {
  updateGotIt = (id: string): Promise<IAdvertisements> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${id}/got-it`), {}));
  };
}

export default new AdvertisementsService('/ms-rrhh/api/advertisements');
