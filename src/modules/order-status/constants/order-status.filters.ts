import { Filter, FilterType } from '@dfl/mui-admin-layout';

const isTrackingAllowedFilter: Filter = {
  filter: 'orderStatus:fields.tracking',
  translate: true,
  type: FilterType.BOOL,
  key: 'tracking',
  field: 'tracking',
};

export const orderStatusFilters = [isTrackingAllowedFilter];
