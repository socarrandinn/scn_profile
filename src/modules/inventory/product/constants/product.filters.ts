import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { PRODUCT_LIST_KEY } from './query-keys';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/settings/category/constants';

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

export const offerFilter: Filter = {
  filter: 'common:offer',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'offer',
  labelKey: 'offer',
  field: 'offer',
};
export const costFilter: Filter = {
  filter: 'common:cost',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'cost',
  labelKey: 'cost',
  field: 'cost',
};
export const priceFilter: Filter = {
  filter: 'common:price',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'price',
  labelKey: 'price',
  field: 'price',
};
export const productProviderFilter: Filter = {
  filter: 'common:productProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'productProvider',
  labelKey: 'productProvider',
  field: 'productProvider',
};
export const logisticProviderFilter: Filter = {
  filter: 'common:logisticProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'logisticProvider',
  labelKey: 'logisticProvider',
  field: 'logisticProvider',
};
export const storeFilter: Filter = {
  filter: 'common:store',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'store',
  labelKey: 'store',
  field: 'store',
};

// export const compensationTypeFilter: Filter = {
//   filter: 'product:fields.compensation.type',
//   translate: true,
//   type: FilterType.FIXED_LIST,
//   options: CompensationTypeValues?.map((value) => ({ label: t(`product:fields.compensation.${value}`), value })),
//   key: 'compensation',
//   labelKey: 'name',
//   field: 'compensation.type',
// };

// export const positionFilter: Filter = {
//   filter: 'product:fields.jobInformation.position',
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

export const productFilters = [
  codeFilter,
  shippingFilter,
  offerFilter,
  costFilter,
  priceFilter,
  categoryFilter,
  createdATFilter,
  productProviderFilter,
  logisticProviderFilter,
  storeFilter,
];
