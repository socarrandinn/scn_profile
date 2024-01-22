import { createdATFilter } from 'modules/common/constants/common.filters';

import {
  codeFilter,
  categoryFilter,
  costFilter,
  productProviderFilter,
  ShippingFreeFilter,
  offerEnabledFilter,
  statusFilter,
  availabilityFilter,
} from 'modules/inventory/product/constants/product.filters';

export const storeProductsFilters = [
  codeFilter,
  ShippingFreeFilter,
  offerEnabledFilter,
  costFilter,
  categoryFilter,
  createdATFilter,
  productProviderFilter,
  statusFilter,
  availabilityFilter,
];
