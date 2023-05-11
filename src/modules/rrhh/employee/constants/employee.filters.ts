import {
  createdATFilter,
  getMunicipalityFilterByField,
  getProvincesFilterByField,
} from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { CategoryService } from 'modules/rrhh/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/rrhh/settings/category/constants';
import { CompensationTypeValues } from 'modules/rrhh/employee/constants/compensation';
import { t } from 'i18next';
import { JobPositionService } from 'modules/rrhh/settings/job-position/services';

export const categoryFilter: Filter = {
  filter: 'employee:fields.category',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: CategoryService.search,
  fetchOption: { size: 5 },
  queryKey: CATEGORIES_LIST_KEY,
  key: 'category',
  labelKey: 'name',
  field: 'category.category',
};

export const compensationTypeFilter: Filter = {
  filter: 'employee:fields.compensation.type',
  translate: true,
  type: FilterType.FIXED_LIST,
  options: CompensationTypeValues?.map((value) => ({ label: t(`employee:fields.compensation.${value}`), value })),
  key: 'compensation',
  labelKey: 'name',
  field: 'compensation.type',
};

export const positionFilter: Filter = {
  filter: 'employee:fields.jobInformation.position',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: JobPositionService.search,
  fetchOption: { size: 5 },
  queryKey: CATEGORIES_LIST_KEY,
  key: 'position',
  labelKey: 'name',
  field: 'jobInformation.position',
};

const provincesFilter = getProvincesFilterByField('address.state');
const municipalitiesFilter = getMunicipalityFilterByField('address.municipality', 'address.state');
export const employeeFilters = [
  positionFilter,
  compensationTypeFilter,
  categoryFilter,
  provincesFilter,
  municipalitiesFilter,
  createdATFilter,
];
