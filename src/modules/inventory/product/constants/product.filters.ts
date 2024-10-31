import { createdATFilter } from 'modules/common/constants/filters/common.filters';
import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { PRODUCT_LIST_KEY } from './query-keys';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/settings/category/constants';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { EmptyFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { STATUS } from 'modules/inventory/provider/common/constants/status.filter';

export const codeFilter: Filter = {
  filter: 'product:fields.code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code',
};

export const categoryFilter: Filter = {
  filter: 'product:fields.category',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'category',
  labelKey: 'name',
  field: 'category._id',
  fetchFunc: CategoryService.search,
  fetchOption: { size: 10 },
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
  filter: 'product:filterName.shippingFree.title',
  translate: true,
  type: FilterType.BOOL,
  queryKey: PRODUCT_LIST_KEY,
  key: 'free',
  labelKey: 'free',
  field: 'shippingSettings.freeShipping',
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
  field: 'priceDetails.values.cost',
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
  field: 'finalPrice',
};

export const productProviderFilter: Filter = {
  filter: 'common:productProvider',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'productProvider',
  labelKey: 'name',
  field: 'providers.supplier.providerId',
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
  field: 'logisticProvider', // esto no esta en el producto
  fetchFunc: LogisticsService.search,
  fetchOption: { size: 10 },
  queryKey: LOGISTICS_LIST_KEY,
};

export const stockStoreFilter: Filter = {
  filter: 'common:warehouse',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'warehouse',
  labelKey: 'name',
  field: 'stock.warehouse',
  fetchFunc: WarehouseService.search,
  fetchOption: { size: 10 },
  queryKey: WAREHOUSES_LIST_KEY,
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

export const productOfferFilter: Filter = {
  filter: 'product:filterName.offer.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'offer',
  field: 'scheduledOffers',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    return value === 'false'
      ? new TermFilter({ field: 'scheduledOffers', value: [] }).toQuery()
      : new OperatorFilter({
          type: 'AND',
          filters: [
            new TermFilter({ field: 'scheduledOffers', value: { $exists: true } }),
            new TermFilter({ field: 'scheduledOffers', value: { $ne: [] } }),
          ],
        }).toQuery();
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

export const productShippingFilter: Filter = {
  filter: 'product:filterName.shippingFree.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'shipping.free',
  field: 'rules.freeShipping',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'false':
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new TermFilter({ field: 'rules.freeShipping', value: false }),
            new TermFilter({ field: 'rules.freeShipping', value: null }),
          ],
        }).toQuery();
      case 'true':
        return new TermFilter({ field: 'rules.freeShipping', value: true }).toQuery();
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

export const availabilityFilter: Filter = {
  filter: 'product:filterName.availability.title',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'stock',
  field: 'stock',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'false':
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new TermFilter({ field: 'stock.enable', value: false }),
            new TermFilter({ field: 'stock.enable', value: null }),
          ],
        }).toQuery();
      case 'true': {
        return new TermFilter({ field: 'stock.enable', value: true }).toQuery();
      }
    }
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'product:filterName.availability.available',
    },
    {
      value: 'false',
      translate: true,
      label: 'product:filterName.availability.noAvailable',
    },
  ],
};

export const productFilters = [
  codeFilter,
  productShippingFilter,
  productOfferFilter,
  costFilter,
  priceFilter,
  categoryFilter,
  productProviderFilter,
  // logisticProviderFilter,
  stockStoreFilter,
  createdATFilter,
];
export const defaultProductFilters = [codeFilter, categoryFilter, stockStoreFilter];

// /inventory/settings/suppliers/:id/inventory > warehouses/products
export const supplierStoreProductFilters = [
  codeFilter,
  productShippingFilter,
  offerEnabledFilter,
  costFilter,
  categoryFilter,
  statusFilter,
  availabilityFilter,
  createdATFilter,
];
export const defaultSupplierStoreProductFilters = [codeFilter, statusFilter, availabilityFilter];

// /inventory/settings/suppliers/:id/products
export const supplierProductTabFilters = [
  codeFilter,
  productShippingFilter,
  offerEnabledFilter,
  costFilter,
  categoryFilter,
  stockStoreFilter,
  createdATFilter,
];

export const defaultSupplierProductTabFilters = [codeFilter, costFilter, stockStoreFilter];

// /inventory/settings/categories/:id/products
export const subCategoryProductFilters = [
  codeFilter,
  brandFilter,
  costFilter,
  priceFilter,
  productProviderFilter,
  logisticProviderFilter,
  stockStoreFilter,
  createdATFilter,
];

export const defaultSubCategoryProductFilters = [codeFilter, costFilter, priceFilter];
