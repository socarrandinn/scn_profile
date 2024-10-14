import { Filter } from '@dfl/mui-admin-layout';
import { productsFilters } from './product.filters';

export const warehouseProductsFilters: Filter[] = productsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|stores\.logistic|stores\.store/),
);
export const providerProductsFilters: Filter[] = warehouseProductsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|logisticProvider|stores\.store/),
);
export const providerLogisticFilters: Filter[] = productsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|productProvider/),
);
export const myProductsFilters: Filter[] = productsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|productProvider|logisticProvider|stores\.store/),
);
