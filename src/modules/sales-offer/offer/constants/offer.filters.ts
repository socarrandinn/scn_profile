import { Filter, FilterType } from '@dfl/mui-admin-layout';

export const fromDateFilter: Filter = {
  filter: 'offer:fields.fromDate',
  translate: true,
  type: FilterType.DATE,
  key: 'fromDate',
  field: 'fromDate',
};
export const toDateFilter: Filter = {
  filter: 'offer:fields.toDate',
  translate: true,
  type: FilterType.DATE,
  key: 'fromDate',
  field: 'fromDate',
};

export const offerFilters = [fromDateFilter, toDateFilter];
