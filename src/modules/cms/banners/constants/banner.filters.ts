import { Filter, FilterType } from '@dfl/mui-admin-layout';

export const startDateFilter: Filter = {
  filter: 'banner:fields.startDate',
  translate: true,
  type: FilterType.DATE,
  key: 'startDate',
  field: 'startDate',
};
export const endDateFilter: Filter = {
  filter: 'banner:fields.endDate',
  translate: true,
  type: FilterType.DATE,
  key: 'endDate',
  field: 'endDate',
};

export const bannerFilters = [startDateFilter, endDateFilter];
