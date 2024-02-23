import { EntityApiService } from '@dfl/react-security';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';

class CausesIncidenceService extends EntityApiService<ICausesIncidence> {}

export default new CausesIncidenceService('/ms-inventory/api/causes-incidence');
