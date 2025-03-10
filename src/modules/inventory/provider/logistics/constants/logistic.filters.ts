import {
  createdATFilter,
  municipalitiesFilter,
  provincesFilter,
  getVisibleFilter,
} from 'modules/common/constants/filters/common.filters';

const visibleFilter = getVisibleFilter('visible');

export const logisticFilters = [
  /* CodeFilter */
  provincesFilter,
  municipalitiesFilter,
  visibleFilter,
  createdATFilter,
];
