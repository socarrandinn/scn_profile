import { HeadCell } from '@dfl/mui-admin-layout';
import {
  categoryNameColumn,
  createdAtProductColumn,
  productBrandColumn,
  productCodeColumn,
  productCostPriceColumn,
  productImageColumn,
  productOnlyNameColumn,
  productPriceColumn,
  supplierNameColumn,
  visibleProductColumn,
} from './product.columns';

export const productRelatedColumns: HeadCell[] = [
  productImageColumn,
  productOnlyNameColumn,
  productCodeColumn,
  supplierNameColumn,
  visibleProductColumn,
  productBrandColumn,
  productCostPriceColumn,
  productPriceColumn,
  categoryNameColumn,
  createdAtProductColumn,
];
