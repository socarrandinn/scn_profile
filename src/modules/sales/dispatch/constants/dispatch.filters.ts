import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';

export const dispatchSuborderCountFilter: Filter = {
  filter: 'dispatch:fields.metrics.suborderCount',
  translate: true,
  type: FilterType.TEXT,
  key: 'suborderCount',
  field: 'metrics.suborderCount',
};

export const dispatchFilters = [dispatchSuborderCountFilter, createdATFilter];
