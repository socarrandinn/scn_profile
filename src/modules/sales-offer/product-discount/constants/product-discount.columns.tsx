import { ProductDiscountRowActions } from 'modules/sales-offer/product-discount/components/ProductDiscountRowActions';
import { CellType, EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';

export const productDiscountNameColumn: HeadCell<IProductDiscount> = {
  field: 'name',
  headerName: 'productDiscount:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IProductDiscount) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const productDiscountEntityColumn: HeadCell<IProductDiscount> = {
  field: 'entity',
  headerName: 'productDiscount:fields.entity',
};

export const productDiscountDescriptionColumn: HeadCell<IProductDiscount> = {
  field: 'description',
  headerName: 'productDiscount:fields.description',
};

export const productDiscountTypeColumn: HeadCell<IProductDiscount> = {
  field: 'type',
  headerName: 'productDiscount:fields.type',
};

export const productDiscountValueColumn: HeadCell<IProductDiscount> = {
  field: 'value',
  headerName: 'productDiscount:fields.value',
};

export const productDiscountFromColumn: HeadCell<any> = {
  field: 'from',
  type: CellType.DATE,
  headerName: 'productDiscount:fields.from',
};

export const productDiscountToColumn: HeadCell<any> = {
  field: 'to',
  type: CellType.DATE,
  headerName: 'productDiscount:fields.to',
};

export const productDiscountActionsColumn: HeadCell<IProductDiscount> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ProductDiscountRowActions,
};

export const productDiscountColumns: Array<HeadCell<any>> = [
  productDiscountNameColumn,
  productDiscountDescriptionColumn,
  productDiscountEntityColumn,
  productDiscountTypeColumn,
  productDiscountValueColumn,
  productDiscountFromColumn,
  productDiscountToColumn,
  productDiscountActionsColumn
];
