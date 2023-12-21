import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IOrderStatus } from 'modules/order-status/interfaces';

class OrderStatusService extends EntityApiService<IOrderStatus> {
  createOrderStatus = async (payload: IOrderStatus) => {
    await ApiClientService.post(this.getPath('/order-status'), payload);
  };
}

export default new OrderStatusService('/ms-sales/api');
