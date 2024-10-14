import { Filter } from '@dfl/mui-admin-layout';
import { productsFilters } from './product.filters';

export const warehouseProductsFilters: Filter[] = productsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|warehouses\.logistic|warehouses\.warehouse/),
);
export const providerProductsFilters: Filter[] = warehouseProductsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|logisticProvider|warehouses\.warehouse/),
);
export const providerLogisticFilters: Filter[] = productsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|productProvider/),
);
export const myProductsFilters: Filter[] = productsFilters.filter(
  (filter) => !filter.field.match(/finalPrice|total|productProvider|logisticProvider|warehouses\.warehouse/),
);
