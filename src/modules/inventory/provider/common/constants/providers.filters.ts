import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { STATUS } from './status.filter';

export const statusFilter: Filter = {
  filter: 'provider:fields:state',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'state',
  field: 'active',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'active', value });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: false,
    label: key,
  })),
};
