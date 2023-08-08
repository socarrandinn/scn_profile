import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { TermFilter } from '@dofleini/query-builder';
import { STATUS } from 'modules/provider/manufacture/constants/status.filter';

const ComissionFilter: Filter = {
  filter: 'Comission',
  type: FilterType.NUMBER,
  key: 'comission',
  field: 'commission'
};
const HandlingCostFilter: Filter = {
  filter: 'Cost',
  type: FilterType.NUMBER,
  key: 'costHandling',
  field: 'handlingCost'
};

const CodeFilter: Filter = {
  filter: 'logistics:fields:code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code'
};

const statusFilter: Filter = {
  filter: 'logistics:fields:status',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'active',
  field: 'active',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({
      field: 'active',
      value
    });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: true,
    label: `logistics:fields:${key.toLowerCase()}`
  }))
};

export const productsFilters = [CodeFilter, statusFilter, ComissionFilter, HandlingCostFilter, createdATFilter];
