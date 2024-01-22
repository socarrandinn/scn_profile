import { HeadCell } from '@dfl/mui-admin-layout';
import {
  productNameColumn,
  productCodeColumn,
  categoryNameColumn,
  productCostPriceColumn,
  productPriceColumn,
  visibleProductColumn,
  createdAtProductColumn,
  productAvailabilityColumn,
  productRowActionColumn,
} from 'modules/inventory/product/constants/product.columns';

export const storeProductColumns: Array<HeadCell<any>> = [
  productNameColumn,
  productCodeColumn,
  visibleProductColumn,
  productCostPriceColumn,
  productPriceColumn,
  categoryNameColumn,
  createdAtProductColumn,
  productAvailabilityColumn,
  productRowActionColumn,
];
