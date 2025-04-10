import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { EmptyFilter, TermFilter } from '@dofleini/query-builder';
import { ORDER_STATUS_TYPE_ENUM } from './order-status-type';
import { STATUS } from 'modules/common/constants';

const isTrackingAllowedFilter: Filter = {
  filter: 'orderStatus:fields.tracking',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'tracking',
  field: 'tracking',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    return new TermFilter({
      field: 'tracking',
      value: value === 'true',
    });
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'orderStatus:fields.tracking',
    },
    {
      value: 'false',
      translate: true,
      label: 'orderStatus:fields.noTracking',
    },
  ],
};

const orderStatusTypeFilter: Filter = {
  filter: 'orderStatus:fields.status',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'type',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    return new TermFilter({
      field: 'type',
      value,
    });
  },
  options: Object.keys(ORDER_STATUS_TYPE_ENUM).map((statusType: string) => ({
    value: statusType,
    translate: true,
    label: `orderStatus:fields.orderStatusType.${statusType}`,
  })),
};

export const orderFilter: Filter = {
  filter: 'orderStatus:fields.priority',
  translate: true,
  type: FilterType.NUMBER,
  key: 'order',
  field: 'order',
};

export const notificationFilter: Filter = {
  filter: 'causesIncidence:notification.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'notification',
  field: 'notification.enabled',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'notification.enabled', value });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: true,
    label: `causesIncidence:notification.${key.toLocaleLowerCase()}`,
  })),
};

export const orderStatusFilters = [orderFilter, notificationFilter, isTrackingAllowedFilter, orderStatusTypeFilter];
