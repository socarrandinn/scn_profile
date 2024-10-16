import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { AUDIENCE_TARGET } from '../constants';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';

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

  searchAll = (): Promise<IOrderStatus[]> => {
    return this.search({
      size: 200,
      sort: {
        order: 'asc',
      },
    }).then((data) => data.data);
  };
}

export default new OrderStatusService('/ms-sales/api/order-status');
