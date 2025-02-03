import { Filter, FilterType } from '@dfl/mui-admin-layout';
import {
  createdATFilter,
  getMunicipalityFilterByField,
  getProvincesFilterByField,
} from 'modules/common/constants/filters/common.filters';
import { getVisibleFilter, getProviderLogisticFilter, getSupplierFilter } from 'modules/common/constants/filters';

const visibleFilter = getVisibleFilter('visible');
const logisticFilter = getProviderLogisticFilter('logistic._id');
const supplierFilter = getSupplierFilter('supplier._id');
// const distributionZoneFilter = getLocationFilterByField('locations.states');
const provinceFilter = getProvincesFilterByField('address.state');
const municipalityFilter = getMunicipalityFilterByField('address.city', 'address.state');

const CommissionFilter: Filter = {
  filter: 'supplier:fields.commission',
  translate: true,
  type: FilterType.NUMBER,
  key: 'commission',
  field: 'priceConfig.value',
};

// warehouses list
export const warehouseFilters: Filter[] = [
  logisticFilter,
  provinceFilter,
  municipalityFilter,
  visibleFilter,
  createdATFilter,
];

// inventory/warehouses/:id/supplier
export const warehouseSupplierFilters = [CommissionFilter, visibleFilter, supplierFilter, createdATFilter];

// /inventory/distribution-centers/:id/warehouses
export const distributionCenterWarehouseFilters = warehouseFilters;

export const defaultWarehouseFilters: Filter[] = [logisticFilter, visibleFilter, createdATFilter];
