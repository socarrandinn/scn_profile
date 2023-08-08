import { EntityApiService } from '@dfl/react-security';
import { ILogistics } from 'modules/store/provider/logistics/interfaces';

class LogisticsService extends EntityApiService<ILogistics> {}

export default new LogisticsService('/ms-inventory/api/logistic-provider');
