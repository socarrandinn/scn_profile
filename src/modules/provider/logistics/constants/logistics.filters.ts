import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';

const ComicionFilter: Filter = {
  filter: 'Comision',
  type: FilterType.NUMBER,
  key: 'com',
  field: 'commission'
};
const HandlingCostFilter: Filter = {
  filter: 'Cost',
  type: FilterType.NUMBER,
  key: 'maniu',
  field: 'handlingCost'
};

const CodeFilter: Filter = {
  filter: 'Code',
  type: FilterType.TEXT,
  key: 'code',
  field: 'code'
};

// const STATUS: Record<string, string> = {
//   GRANMA: 'Granma',
//   APPROVED: 'Aprobado',
//   DENIED: 'Denegado',
//   CANCEL: 'Cancelado'
// };
//
// const ProvinceFilter: Filter = {
//   filter: 'Province',
//   type: FilterType.FIXED_LIST,
//   key: 'addres',
//   field: 'status',
//   options: Object.keys(STATUS).map((key) => ({
//     value: key,
//     translate: false,
//     label: STATUS[key]
//   })),
// };

export const logisticsFilters = [ComicionFilter, HandlingCostFilter, CodeFilter, createdATFilter];
