import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { statusFilter } from 'modules/inventory/provider/common/constants';

const CommissionFilter: Filter = {
  filter: 'supplier:fields.commission',
  translate: true,
  type: FilterType.NUMBER,
  key: 'commission',
  field: 'commission'
};

const CodeFilter: Filter = {
  filter: 'provider:fields:code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code'
};

export const supplierFilters = [
  CodeFilter,
  CommissionFilter,
  statusFilter,
  createdATFilter
];
