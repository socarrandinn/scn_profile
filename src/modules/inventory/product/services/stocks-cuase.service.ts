import { EntityApiService } from '@dfl/react-security';
import { IStockCause } from '../interfaces/IStockCause';

class StockCauseService extends EntityApiService<IStockCause> {}

export default new StockCauseService('/ms-inventory/api/stock-causes');
