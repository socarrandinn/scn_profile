import { EntityApiService } from '@dfl/react-security';
import { IProvider } from 'modules/security/roles/interfaces/IProvider';

class LogisticsService extends EntityApiService<IProvider> {}

export default new LogisticsService('/ms-inventory/api/providers/common');
