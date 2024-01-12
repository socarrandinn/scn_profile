import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { AUDIENCE_TARGET } from '../constants';
import { IOrderStatus } from 'modules/orders/settings/order-status/interfaces';

class OrderStatusService extends EntityApiService<IOrderStatus> {
  searchAudience = async (params?: any, config?: RequestConfig): Promise<SearchResponseType<string>> => {
    return {
      data: Object.keys(AUDIENCE_TARGET).map((target) => {
        return target;
      }),
      hasMore: true,
      total: 2,
    };
  };
}

export default new OrderStatusService('/ms-sales/api/order-status');
