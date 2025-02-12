import { EntityApiService } from '@dfl/react-security';
import { IConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/interfaces';

class ConciliationAdjustmentCausesService extends EntityApiService<IConciliationAdjustmentCauses> {}

export default new ConciliationAdjustmentCausesService('/ms-sales/api/conciliation-adjustment-causes');
