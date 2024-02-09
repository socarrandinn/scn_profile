import { Filter } from '@dfl/mui-admin-layout';
import {
  createdATFilter,
  getLocationFilterByField,
  getMunicipalityFilterByField,
  getProvincesFilterByField,
} from 'modules/common/constants/filters/common.filters';
import { getVisibleFilter, getProviderLogisticFilter } from 'modules/common/constants/filters';

const visibleFilter = getVisibleFilter('visible');
const logisticFilter = getProviderLogisticFilter('logistic._id');
const distributionZoneFilter = getLocationFilterByField('locations');
const provinceFilter = getProvincesFilterByField('address.state');
const municipalityFilter = getMunicipalityFilterByField('address.municipality', 'address.state');

// stores list
export const storeFilters: Filter[] = [
  visibleFilter,
  logisticFilter,
  distributionZoneFilter,
  provinceFilter,
  municipalityFilter,
  createdATFilter,
];
