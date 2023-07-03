import { EntityApiService } from '@dfl/react-security';
import { IStoreArea } from 'modules/store/settings/store-area/interfaces';

class StoreAreaService extends EntityApiService<IStoreArea> {}

export default new StoreAreaService('/ms-inventory/api/store-area');
