import { EntityApiService } from '@dfl/react-security';
import { ICauseCancellation } from 'modules/sales/settings/cause-cancellation/interfaces';

class CauseCancellationService extends EntityApiService<ICauseCancellation> {}

export default new CauseCancellationService('/ms-inventory/api/causes-cancellation');
