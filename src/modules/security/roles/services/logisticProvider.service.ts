import { EntityApiService } from '@dfl/react-security';
import { IProvider } from '../interfaces/IProvider';

class LogisticProvidersService extends EntityApiService<IProvider> {}

export default new LogisticProvidersService('/ms-inventory/api/logistic-provider');
