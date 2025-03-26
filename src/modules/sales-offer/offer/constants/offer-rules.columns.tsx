import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import AmountCategoryRowAction from 'modules/sales-offer/common/components/Cell/AmountCategoryRowAction';
import CategoryCell from 'modules/sales-offer/common/components/Cell/CategoryCell';
import OperatorCell from 'modules/sales-offer/common/components/Cell/OperatorCell';
import ProductItemCell from 'modules/sales-offer/common/components/Cell/ProductItemCell';

export const categoryNameColumn: HeadCell = {
  field: 'category',
  headerName: 'offerOrder:category',
  component: CategoryCell,
};
export const productNameColumn: HeadCell = {
  field: 'product',
  headerName: 'offerOrder:productName',
  component: ProductItemCell,
};

export const operatorColumnColumn: HeadCell = {
  field: 'operator',
  headerName: 'offerOrder:operator.title',
  component: OperatorCell,
  align: CellAlign.CENTER,
};

export const amountColumnColumn: HeadCell = {
  field: 'amount',
  headerName: 'offerOrder:quantity',
  renderCell: (amount: number) => amount,
  align: CellAlign.CENTER,
};

export const quantityColumnColumn: HeadCell = {
  field: 'quantity',
  headerName: 'offerOrder:quantity',
  renderCell: (quantity: number) => quantity,
  align: CellAlign.CENTER,
};

export const removeItemAction = (remove: any, section: boolean): HeadCell => ({
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (_value, _row, rowIndex) => {
    return (
      <AmountCategoryRowAction
        disabled={!section}
        removeRule={() => {
          remove(rowIndex);
        }}
      />
    );
  },
});

export const amountCategoryItemColumns = (action: any) => [
  categoryNameColumn,
  operatorColumnColumn,
  amountColumnColumn,
  action,
];

export const productItemColumns = (action: any) => [
  productNameColumn,
  operatorColumnColumn,
  quantityColumnColumn,
  action,
];

export const productIncludeColumns = (action: any) => [productNameColumn, quantityColumnColumn, action];
