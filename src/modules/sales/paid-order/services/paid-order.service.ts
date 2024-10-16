import { OrderCommonService } from 'modules/sales/common/services';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';

class PaidOrderService extends OrderCommonService<IPaidOrder> {}

export default new PaidOrderService('/ms-sales/api/paid-orders');
