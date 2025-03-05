import { ApiClientService, EntityApiService } from '@dfl/react-security';

import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';

class OrderStatusService extends EntityApiService<IOrderStatus> {
  searchAll = (): Promise<IOrderStatus[]> => {
    return this.search({
      size: 200,
      sort: {
        order: 'asc',
      },
    }).then((data) => data.data);
  };

  /* parseToProviderFilter (data: IOrderStatus[] | undefined): TabViews {
    if (!data) return ORDER_VIEWS;
    // Map to filter
    const filters: TabViews = cloneDeep(ORDER_VIEWS);
    data.forEach((status) => {
      switch (status.type as unknown as ORDER_STATUS_TYPE_ENUM) {
        case ORDER_STATUS_TYPE_ENUM.VALIDATED: {
          filters.pending.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.CUSTOM: {
          filters.processing.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.ERROR: {
          filters.error.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.CANCELED: {
          filters.closed.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.ENDED: {
          filters.closed.filters.filters.push(this.mapFilter(status));
          break;
        }
      }
    });
    return filters;
  }

  parseToFilter (data: IOrderStatus[] | undefined): TabViews {
    if (!data) return ORDER_VIEWS;
    // Map to filter
    const filters: TabViews = cloneDeep(ORDER_VIEWS);
    data.forEach((status) => {
      switch (status.type as unknown as ORDER_STATUS_TYPE_ENUM) {
        case ORDER_STATUS_TYPE_ENUM.PAYED: {
          filters.pending.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.VALIDATED: {
          filters.processing.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.CUSTOM: {
          filters.processing.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.ERROR: {
          filters.error.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.CANCELED: {
          filters.closed.filters.filters.push(this.mapFilter(status));
          break;
        }
        case ORDER_STATUS_TYPE_ENUM.ENDED: {
          filters.closed.filters.filters.push(this.mapFilter(status));
          break;
        }
      }
    });
    return filters;
  }

  generateFilter = (): Promise<TabViews> => {
    return this.searchAll().then((data: IOrderStatus[]) => this.parseToFilter(data));
  }; */

  mapFilter (orderStatus: IOrderStatus) {
    return {
      type: 'TERM',
      field: 'status',
      objectId: true,
      value: orderStatus._id,
    };
  }

  updateTracking = (categoryId: string, value: boolean): any => {
    if (categoryId) {
      return ApiClientService.patch(this.getPath(`/${categoryId}`), {
        tracking: value,
      });
    }
  };
}

export default new OrderStatusService('/ms-auth/api/order-status');
