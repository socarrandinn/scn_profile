import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
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
import { RelatedProductRowActions } from '../components/RelatedProductRowActions';

export const relatedProductRowAction = {
  field: 'actions',
  headerName: 'common:actions',
  width: 150,
  align: CellAlign.CENTER,
  component: RelatedProductRowActions,
};

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
  relatedProductRowAction,
];
