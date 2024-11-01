import { createdATFilter } from 'modules/common/constants/filters/common.filters';

import {
  codeFilter,
  categoryFilter,
  costFilter,
  productProviderFilter,
  offerEnabledFilter,
  statusFilter,
  availabilityFilter,
  productShippingFilter,
  priceFilter,
} from 'modules/inventory/product/constants/product.filters';

export const warehouseProductsFilters = [
  codeFilter,
  statusFilter,
  costFilter,
  priceFilter,
  categoryFilter,
  availabilityFilter,
  productProviderFilter,
  productShippingFilter,
  offerEnabledFilter,
  createdATFilter,
];

export const defaultWarehouseProductsFilters = [codeFilter, statusFilter, productProviderFilter];
