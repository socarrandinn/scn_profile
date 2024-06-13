import { ProductDiscountRowActions } from 'modules/sales-offer/product-discount/components/ProductDiscountRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';

export const productDiscountNameColumn: HeadCell<IProductDiscount> = {
  field: 'name',
  headerName: 'productDiscount:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IProductDiscount) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const productDiscountDescriptionColumn: HeadCell<IProductDiscount> = {
  field: 'description',
  headerName: 'productDiscount:fields.description',
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
  createdATColumn,
  productDiscountActionsColumn
];
