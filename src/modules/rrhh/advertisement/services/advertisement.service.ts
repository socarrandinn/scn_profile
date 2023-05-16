import { EntityApiService } from '@dfl/react-security';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';

class AdvertisementService extends EntityApiService<IAdvertisement> {}

export default new AdvertisementService('ms-rrhh/api/advertisements');
