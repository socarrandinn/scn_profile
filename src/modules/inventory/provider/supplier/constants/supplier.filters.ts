import { createdATFilter, municipalitiesFilter, provincesFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';

const CommissionFilter: Filter = {
  filter: 'supplier:fields.commission',
  translate: true,
  type: FilterType.NUMBER,
  key: 'commission',
  field: 'commission',
};
//
// const CodeFilter: Filter = {
//   filter: 'provider:fields:code',
//   translate: true,
//   type: FilterType.TEXT,
//   key: 'code',
//   field: 'code'
// };

export const supplierFilters = [CommissionFilter, provincesFilter, municipalitiesFilter, createdATFilter];
