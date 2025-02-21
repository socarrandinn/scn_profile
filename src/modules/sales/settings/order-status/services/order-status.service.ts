import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { AUDIENCE_TARGET, ORDER_STATUS_TYPE_ENUM } from '../constants';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { TabViews } from '@dfl/mui-admin-layout';
import { ORDER_VIEWS } from 'modules/sales/common/constants/order-tabs-view.constants';
import { cloneDeep } from 'lodash/fp';

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

  parsePreOrderToFilter = (data: IOrderStatus[] | undefined, views?: TabViews): TabViews => {
    if (!data) return views ?? ORDER_VIEWS;
    // Map to filter
    const filters: TabViews = cloneDeep(views ?? ORDER_VIEWS);
    data.forEach((status) => {
      switch (status.type as unknown as ORDER_STATUS_TYPE_ENUM) {
        case ORDER_STATUS_TYPE_ENUM.PENDING_PAYMENT: {
          filters.pending_payment.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.CANCELED: {
          filters.canceled.filters.filters.push(this.mapFilter(status));
          break;
        }
      }
    });
    return filters;
  };

  parseSubOrdenToFilter = (data: IOrderStatus[] | undefined): TabViews => {
    if (!data) return ORDER_VIEWS;

    // Crear una copia de ORDER_VIEWS
    const filters: TabViews = cloneDeep(ORDER_VIEWS);

    data.forEach((status) => {
      const filterMethod = this.mapFilter(status);

      switch (status.type as unknown as ORDER_STATUS_TYPE_ENUM) {
        case ORDER_STATUS_TYPE_ENUM.PAYED:
        case ORDER_STATUS_TYPE_ENUM.PENDING:
          filters.pending.filters.filters.push(filterMethod);
          break;

        case ORDER_STATUS_TYPE_ENUM.VALIDATED:
        case ORDER_STATUS_TYPE_ENUM.CUSTOM:
          filters.processing.filters.filters.push(filterMethod);
          break;

        case ORDER_STATUS_TYPE_ENUM.ERROR:
          filters.error.filters.filters.push(filterMethod);
          break;

        case ORDER_STATUS_TYPE_ENUM.CANCELED:
        case ORDER_STATUS_TYPE_ENUM.ENDED:
          filters.closed.filters.filters.push(filterMethod);
          break;

        default:
          break;
      }
    });

    return filters;
  };

  generateFilter = (): Promise<TabViews> => {
    return this.searchAll().then((data: IOrderStatus[]) => this.parseSubOrdenToFilter(data));
  };

  mapFilter = (orderStatus: IOrderStatus) => {
    return {
      type: 'TERM',
      field: 'status._id',
      objectId: true,
      value: orderStatus._id,
    };
  };

  updateTracking = (categoryId: string, value: boolean): any => {
    if (categoryId) {
      return ApiClientService.patch(this.getPath(`/${categoryId}`), {
        tracking: value,
      });
    }
  };
}

export default new OrderStatusService('/ms-sales/api/order-status');
