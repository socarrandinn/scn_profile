import { EntityApiService } from '@dfl/react-security';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';

class PaidOrderService extends EntityApiService<IPaidOrder> {}

export default new PaidOrderService('/ms-sales/api/paid-orders');
