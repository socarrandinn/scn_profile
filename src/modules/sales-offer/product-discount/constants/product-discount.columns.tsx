import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { createdATColumn } from 'modules/common/constants';
import { productColumns } from 'modules/inventory/product/constants';
import { ProductDiscountRowActions } from 'modules/sales-offer/product-discount/components/ProductDiscountRowActions';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import ProductDiscountDetailRowActions from '../components/ProductDiscountDetailRowActions/ProductDiscountDetailRowActions';
import { ProductDiscountEnabledPicker } from '../components/ProductDiscountEnabledPicker';
import { ProductDiscountStatusCell } from '../components/ProductDiscountStatusCell';
import { IProduct } from 'modules/inventory/common/interfaces';
import { ProductDiscountCell } from '../components/ProductDiscountCell';
import { ProgramerDateCell } from '../../common/components/ProgramerDateCell';

export const productDiscountNameColumn: HeadCell<IProductDiscount> = {
  field: 'name',
  headerName: 'productDiscount:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IProductDiscount) => (
    <AvatarNameCell
      link={`/sales/offers/settings/product_discounts/${data._id as string}/details`}
      name={name}
      hideImage
      permissions={[PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_VIEW]}
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
  align: CellAlign.CENTER,
};

export const productDiscountStatusColumn: HeadCell<IProductDiscount> = {
  field: 'status',
  headerName: 'common:status',
  component: ProductDiscountStatusCell,
  align: CellAlign.CENTER,
};

export const productDiscountValueColumn: HeadCell<IProductDiscount> = {
  field: 'discountConfig.value',
  headerName: 'productDiscount:fields.discount',
  align: CellAlign.CENTER,
  renderCell: (_, data) => <ProductDiscountCell data={data} />,
};

export const productDiscountDateColumn: HeadCell<any> = {
  field: 'fromDate',
  type: CellType.DATE,
  align: CellAlign.CENTER,
  headerName: 'productDiscount:fields.fromToDate',
  renderCell: (_, data) => <ProgramerDateCell fromDate={data?.fromDate} toDate={data?.toDate} />,
};

export const productDiscountCountColumn: HeadCell<any> = {
  field: 'totalCount',
  type: CellType.NUMBER,
  headerName: 'productDiscount:fields.count',
  align: CellAlign.CENTER,
};

export const productDiscountActionsColumn: HeadCell<IProductDiscount> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (_, data) => <ProductDiscountRowActions data={data} />,
};

export const productDiscountColumns: Array<HeadCell<any>> = [
  productDiscountNameColumn,
  productDiscountCountColumn,
  productDiscountEnabledColumn,
  productDiscountStatusColumn,
  productDiscountValueColumn,
  productDiscountDateColumn,
  createdATColumn,
  productDiscountActionsColumn,
];

export const productDiscountDetailColumns: HeadCell[] = [
  ...productColumns.filter((col: any) => !col.field.match(/actions|visible/)),
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
  (column: any) => !column?.field?.match(/finalPrice|name/),
);

providerProductDiscountDetailColumns.splice(1, 0, {
  field: 'name',
  headerName: 'common:name',
  maxWidth: 300,
  renderCell: (name: string, data: IProduct) => (
    <AvatarNameCell
      link={`/inventory/products/${data?._id}/general`}
      name={name}
      variant={'rounded'}
      image={data?.media?.[0]}
    />
  ),
});

export { providerProductDiscountDetailColumns };
