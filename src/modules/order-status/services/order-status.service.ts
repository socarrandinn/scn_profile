import { EntityApiService } from '@dfl/react-security';
import { IOrderStatus } from 'modules/order-status/interfaces';

class OrderStatusService extends EntityApiService<IOrderStatus> {}

export default new OrderStatusService('/ms-sales/api/order-status');
