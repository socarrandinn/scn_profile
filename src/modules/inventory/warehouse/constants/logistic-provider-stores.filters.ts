import { Filter } from '@dfl/mui-admin-layout';
import {
  createdATFilter,
  getLocationFilterByField,
  getMunicipalityFilterByField,
  getProvincesFilterByField,
} from 'modules/common/constants/filters/common.filters';
import { getVisibleFilter } from 'modules/common/constants/filters';

const visibleFilter = getVisibleFilter('visible');
const distributionZoneFilter = getLocationFilterByField('locations');
const provinceFilter = getProvincesFilterByField('address.state');
const municipalityFilter = getMunicipalityFilterByField('address.municipality', 'address.state');

export const logisticProviderStoreFilters: Filter[] = [
  provinceFilter,
  municipalityFilter,
  distributionZoneFilter,
  visibleFilter,
  createdATFilter,
];
