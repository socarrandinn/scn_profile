import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { PRODUCT_LIST_KEY } from './query-keys';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/settings/category/constants';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { SupplierService } from 'modules/inventory/provider/supplier/services';

export const codeFilter: Filter = {
  filter: 'product:fields.code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code',
};

export const categoryFilter: Filter = {
  filter: 'common:category',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'category',
  labelKey: 'name',
  field: 'category',
  fetchFunc: CategoryService.search,
  fetchOption: { size: 5 },
  queryKey: CATEGORIES_LIST_KEY,
};

export const brandFilter: Filter = {
  filter: 'product:fields.brand',
  translate: true,
  type: FilterType.TEXT,
  key: 'brand',
  field: 'brand',
};

export const shippingFilter: Filter = {
  filter: 'product:free',
  translate: true,
  type: FilterType.BOOL,
  queryKey: PRODUCT_LIST_KEY,
  key: 'free',
  labelKey: 'free',
  field: 'free',
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
  type: FilterType.NUMBER,
  key: 'cost',
  field: 'cost',
};
export const priceFilter: Filter = {
  filter: 'common:price',
  translate: true,
  type: FilterType.NUMBER,
  key: 'price',
  field: 'price',
};
export const productProviderFilter: Filter = {
  filter: 'common:productProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'productProvider',
  labelKey: 'name',
  field: 'productProvider',
  fetchFunc: SupplierService.search,
  fetchOption: { size: 5 },
  queryKey: 'aaCATEGORIES_LIST_KEY',
};
export const logisticProviderFilter: Filter = {
  filter: 'common:logisticProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'logisticProvider',
  labelKey: 'name',
  field: 'logisticProvider',
  fetchFunc: LogisticsService.search,
  fetchOption: { size: 5 },
  queryKey: CATEGORIES_LIST_KEY,
};
export const storeFilter: Filter = {
  filter: 'common:store',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'store',
  labelKey: 'store',
  field: 'store',
};

// const provincesFilter = getProvincesFilterByField('address.state');

// const municipalitiesFilter = getMunicipalityFilterByField('address.municipality', 'address.state');

export const productFilters = [
  codeFilter,
  brandFilter,
  categoryFilter,
  costFilter,
  priceFilter,
  createdATFilter,
  productProviderFilter,
  logisticProviderFilter,
  storeFilter,
];

// supplier > stores > products
export const supplierStoreProductFilters = [
  codeFilter,
  costFilter,
  priceFilter,
  categoryFilter,
  createdATFilter,
  productProviderFilter,
  logisticProviderFilter,
  storeFilter,
];
