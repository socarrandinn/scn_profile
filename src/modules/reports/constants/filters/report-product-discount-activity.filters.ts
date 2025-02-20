import { Filter, FilterType } from '@dfl/mui-admin-layout';

export const createdATFilter: Filter = {
  filter: 'common:createdAt',
  translate: true,
  type: FilterType.DATE,
  key: 'createdAt',
  field: 'createdAt',
};

export const reportProductDiscountFilters = [createdATFilter];
