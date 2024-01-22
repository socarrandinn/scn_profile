import { createdATFilter, municipalitiesFilter, provincesFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { ProvinceSelectFilter } from 'modules/inventory/common/components/ProvinceSelectFilter';
import { SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY } from './supplier.queries';

const CommissionFilter: Filter = {
  filter: 'supplier:fields.commission',
  translate: true,
  type: FilterType.NUMBER,
  key: 'commission',
  field: 'commission',
};
const provinceFilter: Filter = {
  filter: 'common:province',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: SUPPLIER_ANALYTIC_REPORT_SALE_PROVINCE_KEY,
  field: 'states', // todo
  Component: ProvinceSelectFilter,
};

export const supplierFilters = [CommissionFilter, provincesFilter, municipalitiesFilter, createdATFilter];

// inventory/stores/:id/supplier
export const storeSupplierFilters = [CommissionFilter, provincesFilter, municipalitiesFilter, createdATFilter];

// inventory/settings/suppliers/:id/sale_report
export const supplierReportSaleFilters = [createdATFilter, provinceFilter];
