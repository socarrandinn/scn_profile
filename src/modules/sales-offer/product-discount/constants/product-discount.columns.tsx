import { ProductDiscountRowActions } from 'modules/sales-offer/product-discount/components/ProductDiscountRowActions';
import { CellAlign, CellType, EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';
import { createdATColumn } from 'modules/common/constants';
import { ProductDiscountTypePicker } from '../components/ProductDiscountTypePicker';
import { PRODUCT_DISCOUNT_ENABLED_MAP, PRODUCT_DISCOUNT_TYPE_MAP } from './product-discount.constant';
import { IStatus } from '@dfl/mui-react-common';
import { ProductDiscountEnabledPicker } from '../components/ProductDiscountEnabledPicker';

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

export const productDiscountEnabledColumn: HeadCell<IProductDiscount> = {
  field: 'enabled',
  headerName: 'productDiscount:fields.enabled',
  component: ProductDiscountEnabledPicker,
  align: CellAlign.CENTER
};

export const productDiscountTypeColumn: HeadCell<IProductDiscount> = {
  field: 'discountType',
  headerName: 'productDiscount:fields.discountType',
  component: ProductDiscountTypePicker,
  align: CellAlign.CENTER
};

export const productDiscountValueColumn: HeadCell<IProductDiscount> = {
  field: 'discount',
  headerName: 'productDiscount:fields.discount',
};

export const productDiscountStartDateColumn: HeadCell<any> = {
  field: 'startDate',
  type: CellType.DATE,
  headerName: 'productDiscount:fields.startDate',
};

export const productDiscountEndDateColumn: HeadCell<any> = {
  field: 'endDate',
  type: CellType.DATE,
  headerName: 'productDiscount:fields.endDate',
};

export const productDiscountCountColumn: HeadCell<any> = {
  field: 'count',
  type: CellType.NUMBER,
  headerName: 'productDiscount:fields.count',
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
  // productDiscountEntityColumn,
  // productDiscountDescriptionColumn,
  productDiscountCountColumn,
  productDiscountEnabledColumn,
  productDiscountTypeColumn,
  productDiscountValueColumn,
  productDiscountStartDateColumn,
  productDiscountEndDateColumn,
  createdATColumn,
  productDiscountActionsColumn
];
