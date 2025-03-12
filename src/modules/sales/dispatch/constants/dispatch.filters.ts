import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';

export const dispatchSuborderCountFilter: Filter = {
  filter: 'dispatch:fields.metrics.suborderCount',
  translate: true,
  type: FilterType.NUMBER,
  key: 'suborderCount',
  field: 'metrics.suborderCount',
};

export const dispatchByRegionFilter: Filter = {
  filter: 'dispatch:fields.metrics.subordersByRegion',
  translate: true,
  type: FilterType.TEXT,
  key: 'region',
  field: 'metrics.subordersByRegion.state',
};

export const dispatchFilters = [dispatchSuborderCountFilter, dispatchByRegionFilter, createdATFilter];
