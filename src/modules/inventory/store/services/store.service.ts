import { EntityApiService } from '@dfl/react-security';
import { IStore } from 'modules/inventory/store/interfaces';

class StoreService extends EntityApiService<IStore> {}

export default new StoreService('/ms-inventory/api/stores');
