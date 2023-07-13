import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';

export const brandFilter: Filter = {
  filter: 'common:brand',
  translate: true,
  type: FilterType.TEXT,
  key: 'br',
  field: 'brand',
};

export const manufactureFilters = [brandFilter, createdATFilter];
