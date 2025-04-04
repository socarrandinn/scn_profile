import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { PAGE_STATUS_ENUM } from './page-status';

export const statusFilter: Filter = {
  filter: 'page:fields:status',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'status',
  field: 'status',
  options: Object.keys(PAGE_STATUS_ENUM).map((key) => ({
    value: key,
    translate: true,
    label: `page:status.${key}`,
  })),
};

export const pageFilters = [statusFilter, createdATFilter];
