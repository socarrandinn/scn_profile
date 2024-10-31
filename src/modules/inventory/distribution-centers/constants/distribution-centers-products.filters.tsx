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
} from 'modules/inventory/product/constants/product.filters';

export const distributionCentersProductsFilters = [
  codeFilter,
  productShippingFilter,
  offerEnabledFilter,
  costFilter,
  categoryFilter,
  productProviderFilter,
  statusFilter,
  availabilityFilter,
  createdATFilter,
];
