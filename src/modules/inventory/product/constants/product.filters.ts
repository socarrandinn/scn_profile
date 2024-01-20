import { createdATFilter } from 'modules/common/constants/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { PRODUCT_LIST_KEY } from './query-keys';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/settings/category/constants';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { EmptyFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { STORES_LIST_KEY } from 'modules/inventory/store/constants';
import { StoreService } from 'modules/inventory/store/services';
import { STATUS } from 'modules/inventory/provider/common/constants/status.filter';

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
  field: 'category.categoryId',
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
  field: 'finalPrice',
};

export const statusFilter: Filter = {
  filter: 'common:status',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'visible',
  field: 'visible',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: 'visible', value });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: true,
    label: `common:${key.toLocaleLowerCase()}`,
  })),
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
  fetchOption: { size: 10 },
  queryKey: SUPPLIER_LIST_KEY,
};

export const logisticProviderFilter: Filter = {
  filter: 'common:logisticProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'logisticProvider',
  labelKey: 'name',
  field: 'logisticProvider',
  fetchFunc: LogisticsService.search,
  fetchOption: { size: 10 },
  queryKey: LOGISTICS_LIST_KEY,
};

export const stockStoreFilter: Filter = {
  filter: 'common:store',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'store',
  labelKey: 'name',
  field: 'stock.store',
  fetchFunc: StoreService.search,
  fetchOption: { size: 10 },
  queryKey: STORES_LIST_KEY,
};

export const ShippingFreeFilter: Filter = {
  filter: 'product:filterName.shippingFree.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'shipping.free',
  field: 'shipping',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'false':
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new TermFilter({ field: 'shipping.free', value: false }),
            new TermFilter({ field: 'shipping.free', value: null }),
          ],
        }).toQuery();
      case 'true':
        return new TermFilter({ field: 'shipping.free', value: true }).toQuery();
    }
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'product:filterName.shippingFree.free',
    },
    {
      value: 'false',
      translate: true,
      label: 'product:filterName.shippingFree.noFree',
    },
  ],
};

export const offerEnabledFilter: Filter = {
  filter: 'product:filterName.offer.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'offer',
  field: 'offer.enabled',
  transform: (value: any) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'false':
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new TermFilter({ field: 'offer.enabled', value: false }),
            new TermFilter({ field: 'offer.enabled', value: null }),
          ],
        }).toQuery();
      case 'true':
        return new TermFilter({ field: 'offer.enabled', value: true }).toQuery();
    }
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'product:filterName.offer.free',
    },
    {
      value: 'false',
      translate: true,
      label: 'product:filterName.offer.noFree',
    },
  ],
};

export const productFilters = [
  codeFilter,
  offerFilter,
  shippingFilter,
  brandFilter,
  categoryFilter,
  costFilter,
  priceFilter,
  createdATFilter,
  productProviderFilter,
  logisticProviderFilter,
  stockStoreFilter,
];

// /inventory/settings/suppliers/:id/inventory > stores/products
export const supplierStoreProductFilters = [
  codeFilter,
  ShippingFreeFilter,
  offerEnabledFilter,
  costFilter,
  categoryFilter,
  createdATFilter,
  statusFilter,
];

// /inventory/settings/suppliers/:id/products
export const supplierProductTabFilters = [
  codeFilter,
  ShippingFreeFilter,
  offerEnabledFilter,
  costFilter,
  categoryFilter,
  stockStoreFilter,
  logisticProviderFilter,
  createdATFilter,
];

// /inventory/settings/categories/:id/products

export const subCategoryProductFilters = [
  codeFilter,
  brandFilter,
  costFilter,
  priceFilter,
  createdATFilter,
  productProviderFilter,
  logisticProviderFilter,
  stockStoreFilter,
];
