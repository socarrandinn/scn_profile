import { HeadCell } from '@dfl/mui-admin-layout';
import {
  productNameColumn,
  productCodeColumn,
  productBrandColumn,
  categoryNameColumn,
  productCostPriceColumn,
  productPriceColumn,
  supplierNameColumn,
  productStatusColumn,
} from 'modules/inventory/product/constants/product.columns';

export const storeProductColumns: Array<HeadCell<any>> = [
  productNameColumn,
  productCodeColumn,
  productBrandColumn,
  categoryNameColumn,
  productCostPriceColumn,
  productPriceColumn,
  supplierNameColumn,
  productStatusColumn,
];
