import {
  createdATFilter,
  municipalitiesFilter,
  provincesFilter,
} from 'modules/common/constants/filters/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';

// const CommissionFilter: Filter = {
//   filter: 'Commission',
//   type: FilterType.NUMBER,
//   key: 'cm',
//   field: 'commission',
// };

/* const CodeFilter: Filter = {
  filter: 'logistics:fields:code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code',
}; */

export const logisticFilters = [
  /* CodeFilter */
  provincesFilter,
  municipalitiesFilter,
  createdATFilter,
];
