import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { EmptyFilter, TermFilter } from '@dofleini/query-builder';
import { ORDER_STATUS_TYPES } from './order-status-type';

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
  options: Object.keys(ORDER_STATUS_TYPES).map((statusType: string) => ({
    value: statusType,
    translate: true,
    label: `orderStatus:fields.orderStatusType.${statusType}`,
  })),
};

export const orderStatusFilters = [isTrackingAllowedFilter, orderStatusTypeFilter];
