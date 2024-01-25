import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { EmptyFilter, TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants/common.filters';
import { CLIENTS_STATUS } from './clients.status';

export const clientsStatusFilter: Filter = {
  filter: 'common:status',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'status',
  field: 'status',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    return new TermFilter({
      field: 'status',
      value,
    });
  },
  options: Object.keys(CLIENTS_STATUS).map((statusType: string) => ({
    value: statusType,
    translate: true,
    label: `clients:fields.status.${statusType}`,
  })),
};

export const clientsFilters = [clientsStatusFilter, createdATFilter];
