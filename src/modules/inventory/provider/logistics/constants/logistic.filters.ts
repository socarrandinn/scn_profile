import { createdATFilter } from 'modules/common/constants/filters/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';

// const CommissionFilter: Filter = {
//   filter: 'Commission',
//   type: FilterType.NUMBER,
//   key: 'cm',
//   field: 'commission',
// };
const HandlingCostFilter: Filter = {
  filter: 'logistics:fields:costs',
  translate: true,
  type: FilterType.NUMBER,
  key: 'hc',
  field: 'handlingCost',
};

const CodeFilter: Filter = {
  filter: 'logistics:fields:code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code',
};

export const logisticFilters = [CodeFilter, HandlingCostFilter, createdATFilter];
