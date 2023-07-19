import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { STATUS } from './status.filter';

export const brandFilter: Filter = {
  filter: 'common:brand',
  translate: true,
  type: FilterType.TEXT,
  key: 'br',
  field: 'brand',
};

const statusFilter: Filter = {
  filter: 'manufacture:fields:state',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'state',
  field: 'state',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'state', value });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: false,
    label: key,
  })),
};

export const manufactureFilters = [statusFilter, brandFilter, createdATFilter];
