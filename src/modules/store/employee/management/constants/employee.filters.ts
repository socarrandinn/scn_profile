import {
  createdATFilter,
  getMunicipalityFilterByField,
  getProvincesFilterByField,
} from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { CategoryService } from 'modules/store/employee/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/store/employee/settings/category/constants';
import { CompensationTypeValues } from 'modules/store/employee/management/constants/compensation';
import { t } from 'i18next';
import { JobPositionService } from 'modules/store/employee/settings/job-position/services';
import { PRODUCT_LIST_KEY } from './queries';

export const codeFilter: Filter = {
  filter: 'product:fields.code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code',
};

export const shippingFilter: Filter = {
  filter: 'product:free',
  translate: true,
  type: FilterType.BOOL,
  // fetchFunc: CategoryService.search,
  // fetchOption: { size: 5 },
  queryKey: PRODUCT_LIST_KEY,
  key: 'free',
  labelKey: 'free',
  field: 'free',
};

export const categoryFilter: Filter = {
  filter: 'common:category',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  fetchFunc: CategoryService.search,
  fetchOption: { size: 5 },
  queryKey: CATEGORIES_LIST_KEY,
  key: 'category',
  labelKey: 'category',
  field: 'category',
};

export const ofertFilter: Filter = {
  filter: 'common:ofert',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'ofert',
  labelKey: 'ofert',
  field: 'ofert',
}
export const costFilter: Filter = {
  filter: 'common:cost',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'cost',
  labelKey: 'cost',
  field: 'cost',
}
export const priceFilter: Filter = {
  filter: 'common:price',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'price',
  labelKey: 'price',
  field: 'price',
}
export const productProviderFilter: Filter = {
  filter: 'common:productProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'productProvider',
  labelKey: 'productProvider',
  field: 'productProvider',
}
export const logisticProviderFilter: Filter = {
  filter: 'common:logisticProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'logisticProvider',
  labelKey: 'logisticProvider',
  field: 'logisticProvider',
}
export const storeFilter: Filter = {
  filter: 'common:store',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'store',
  labelKey: 'store',
  field: 'store',
}



// export const compensationTypeFilter: Filter = {
//   filter: 'employee:fields.compensation.type',
//   translate: true,
//   type: FilterType.FIXED_LIST,
//   options: CompensationTypeValues?.map((value) => ({ label: t(`employee:fields.compensation.${value}`), value })),
//   key: 'compensation',
//   labelKey: 'name',
//   field: 'compensation.type',
// };

// export const positionFilter: Filter = {
//   filter: 'employee:fields.jobInformation.position',
//   translate: true,
//   type: FilterType.DYNAMIC_LIST,
//   fetchFunc: JobPositionService.search,
//   fetchOption: { size: 5 },
//   queryKey: CATEGORIES_LIST_KEY,
//   key: 'position',
//   labelKey: 'name',
//   field: 'jobInformation.position',
// };

// const provincesFilter = getProvincesFilterByField('address.state');

// const municipalitiesFilter = getMunicipalityFilterByField('address.municipality', 'address.state');

export const employeeFilters = [
  codeFilter,
  shippingFilter,
  ofertFilter,
  costFilter,
  priceFilter,
  categoryFilter,
  createdATFilter,
  productProviderFilter,
  logisticProviderFilter,
  storeFilter
];
