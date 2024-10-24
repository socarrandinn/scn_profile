import { createdATFilter } from 'modules/common/constants/filters/common.filters';

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

export const distributionCentersProductsFilters = [
  codeFilter,
  ShippingFreeFilter,
  offerEnabledFilter,
  costFilter,
  categoryFilter,
  productProviderFilter,
  statusFilter,
  availabilityFilter,
  createdATFilter,
];
