import { HeadCell } from '@dfl/mui-admin-layout';
import {
  productNameColumn,
  productCodeColumn,
  categoryNameColumn,
  productCostPriceColumn,
  productPriceColumn,
  visibleProductColumn,
  createdAtProductColumn,
  productAvailabilityColumn
} from 'modules/inventory/product/constants/product.columns';
import { stockColumnAction } from 'modules/inventory/product/constants/product.stock.columns';

export const distributionCentersProductColumns: Array<HeadCell<any>> = [
  productNameColumn,
  productCodeColumn,
  visibleProductColumn,
  productCostPriceColumn,
  productPriceColumn,
  categoryNameColumn,
  createdAtProductColumn,
  productAvailabilityColumn,
  stockColumnAction
  // productRowActionColumn,
];
