import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants/common.filters';

export const phoneFilter: Filter = {
  filter: 'common:phone',
  translate: true,
  type: FilterType.TEXT,
  key: 'ph',
  field: 'phone',
};

export const filters = [phoneFilter, createdATFilter];
