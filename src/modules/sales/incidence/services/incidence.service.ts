import { EntityApiService } from '@dfl/react-security';
import { IIncidence } from 'modules/sales/incidence/interfaces';

class IncidenceService extends EntityApiService<IIncidence> {}

export default new IncidenceService('/ms-sales/api/incidence');
