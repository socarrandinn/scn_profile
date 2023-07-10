import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { EmptyFilter, TermFilter } from '@dofleini/query-builder';

const visibleFilter: Filter = {
  filter: 'category:fields.visibility',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'visible',
  field: 'visible',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    return new TermFilter({ field: 'visible', value }).toQuery();
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'category:visibility.visible',
    },
    {
      value: 'false',
      translate: true,
      label: 'category:visibility.hide',
    },
  ],
}
export const categoryFilters: Filter[] = [
  visibleFilter,
  createdATFilter
];
