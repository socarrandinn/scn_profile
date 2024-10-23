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
const distributionZoneFilter = getLocationFilterByField('locations.states');
const provinceFilter = getProvincesFilterByField('address.state');
const municipalityFilter = getMunicipalityFilterByField('address.municipality', 'address.state');

// distributionCentersFilters list
export const distributionCentersFilters: Filter[] = [
  logisticFilter,
  provinceFilter,
  municipalityFilter,
  distributionZoneFilter,
  visibleFilter,
  createdATFilter,
];
