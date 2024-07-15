import { EntityApiService } from '@dfl/react-security';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';

class StockReductionCauseService extends EntityApiService<IStockReductionCause> {}

export default new StockReductionCauseService('/ms-inventory/api/stock-reduction-causes');
