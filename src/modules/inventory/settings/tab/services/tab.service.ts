import { EntityApiService } from '@dfl/react-security';
import { ITab } from 'modules/inventory/settings/tab/interfaces';

class TabService extends EntityApiService<ITab> {}

export default new TabService('tab');
