import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { createdATColumn } from 'modules/common/constants';
import { productColumns } from 'modules/inventory/product/constants';
import { ProductDiscountRowActions } from 'modules/sales-offer/product-discount/components/ProductDiscountRowActions';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import ProductDiscountDetailRowActions from '../components/ProductDiscountDetailRowActions/ProductDiscountDetailRowActions';
import { ProductDiscountEnabledPicker } from '../components/ProductDiscountEnabledPicker';
import { ProductDiscountTypePicker } from '../components/ProductDiscountTypePicker';
import { IProduct } from 'modules/inventory/common/interfaces';

export const productDiscountNameColumn: HeadCell<IProductDiscount> = {
  field: 'name',
  headerName: 'productDiscount:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IProductDiscount) => (
    <AvatarNameCell
      link={`/sales/offers/settings/product_discounts/${ data._id }/details`}
      name={name}
      hideImage
    />
  ),
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

export const productDiscountDetailColumns: HeadCell[] = [
  ...productColumns.filter((col: any) => !col.field.match(/actions/)),
  {
    field: 'actions',
    sortable: false,
    align: CellAlign.CENTER,
    headerName: 'common:actions',
    permissions: ['BULK_PRODUCT_DISCOUNT:DELETE', 'BULK_PRODUCT_DISCOUNT:WRITE'],
    atLessOne: true,
    component: ProductDiscountDetailRowActions,
  },
];


const providerProductDiscountDetailColumns: HeadCell[] = productDiscountDetailColumns.filter(
  (colum: any) => !colum.field.match(/finalPrice|name/),
);

providerProductDiscountDetailColumns.splice(1, 0, {
  field: 'name',
  headerName: 'common:name',
  maxWidth: 300,
  renderCell: (name: string, data: IProduct) => (
    <AvatarNameCell
      link={`/inventory/products/${ data._id }/general`}
      name={name}
      variant={'rounded'}
      image={data.media?.[0]}
    />
  ),
});

export { providerProductDiscountDetailColumns };
