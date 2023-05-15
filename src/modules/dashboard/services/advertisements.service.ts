import { EntityApiService } from '@dfl/react-security';
import { IAdvertisements } from 'modules/dashboard/interfaces';

class AdvertisementsService extends EntityApiService<IAdvertisements> {}

export default new AdvertisementsService('/ms-rrhh/api/advertisements');
