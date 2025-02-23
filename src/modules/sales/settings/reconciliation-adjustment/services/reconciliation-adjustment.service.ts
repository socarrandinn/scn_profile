import { EntityApiService } from '@dfl/react-security';
import { IReconciliationAdjustment } from '../interfaces/IReconciliationAdjustment';

class ReconciliationAdjustmentService extends EntityApiService<IReconciliationAdjustment> {}

export default new ReconciliationAdjustmentService('/ms-sales/api/reconciliation-adjustment');
