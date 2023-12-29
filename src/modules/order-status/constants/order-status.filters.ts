import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { EmptyFilter, TermFilter } from '@dofleini/query-builder';

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
      label: 'no tracking',
    },
  ],
};

export const orderStatusFilters = [isTrackingAllowedFilter];
