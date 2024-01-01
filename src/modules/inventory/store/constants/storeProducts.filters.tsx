import { createdATFilter } from 'modules/common/constants/common.filters';

import {
  codeFilter,
  brandFilter,
  categoryFilter,
  costFilter,
  priceFilter,
  productProviderFilter,
  logisticProviderFilter,
} from 'modules/inventory/product/constants/product.filters';

export const storeProductsFilters = [
  codeFilter,
  brandFilter,
  categoryFilter,
  costFilter,
  priceFilter,
  productProviderFilter,
  logisticProviderFilter,
  createdATFilter,
];
