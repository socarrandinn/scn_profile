import { EntityApiService } from '@dfl/react-security';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';

class LogisticsService extends EntityApiService<ILogistics> {}

export default new LogisticsService('/ms-inventory/api/provider/logistics');
