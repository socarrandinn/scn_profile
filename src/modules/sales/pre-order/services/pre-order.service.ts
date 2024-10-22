import { OrderCommonService } from 'modules/sales/common/services';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';

class PreOrderService extends OrderCommonService<IOrder> {}

export default new PreOrderService('/ms-sales/api/unpaid-orders');
