import { OrderCommonService } from 'modules/sales/common/services';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';;

class PaidOrderService extends OrderCommonService<IOrder> {}

export default new PaidOrderService('/ms-sales/api/orders');
