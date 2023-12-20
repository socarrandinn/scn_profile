import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IStatus } from '@dfl/mui-react-common';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IProduct, IProductCategory, IProviderDate } from 'modules/inventory/product/interfaces/IProduct';
import { ProductStatusPicker } from '../components/ProductStatusPicker';
import { PRODUCT_STATUS_MAP } from './product_status';
// "status": "Status",
export const productNameColumn: HeadCell = {
  field: 'name',
  headerName: 'product:fields.name',
  disablePadding: true,
  renderCell: (name: string, data: IProduct) => (
    <AvatarNameCell
      link={`/inventory/products/${data._id}/general`}
      name={name}
      variant={'rounded'}
      image={data.media?.[0]}
    />
  ),
};

export const productCodeColumn: HeadCell = {
  field: 'code',
  headerName: 'product:fields.code',
};

export const productStatusColumn: HeadCell = {
  field: 'activo',
  headerName: 'product:fields.status',
};

export const productBrandColumn: HeadCell = {
  field: 'brand',
  headerName: 'product:fields.brand',
};

export const productCostPriceColumn: HeadCell = {
  field: 'price',
  headerName: 'product:fields.cost',
  type: CellType.CURRENCY,
};

export const productPriceColumn: HeadCell = {
  field: 'finalPrice',
  headerName: 'product:fields.price',
  type: CellType.CURRENCY,
};

export const categoryNameColumn: HeadCell = {
  field: 'category',
  headerName: 'product:fields.category',
  disablePadding: false,
  renderCell: (category: IProductCategory) => (
    <AvatarNameCell
      link={`/inventory/settings/categories/${category.categoryId}/general`}
      hideImage
      name={category.name}
    />
  ),
};

export const supplierNameColumn: HeadCell = {
  field: 'providers.supplier',
  headerName: 'product:fields.supplier',
  disablePadding: false,
  renderCell: (supplier: IProviderDate) => (
    <AvatarNameCell
      link={`/inventory/settings/suppliers/${supplier.providerId}/general`}
      hideImage
      name={supplier.name}
    />
  ),
};

export const visibleProductColumn: HeadCell = {
  field: 'visible',
  headerName: 'product:visible',
  renderCell: (visible, data) => (
    <ProductStatusPicker value={PRODUCT_STATUS_MAP.get(visible) as IStatus} productId={data?._id} />
  ),
};

export const orderProductColumn: HeadCell = {
  field: 'order',
  headerName: 'product:product.form.order.placeholder',
  align: CellAlign.CENTER,
};

export const createdAtProductColumn: HeadCell = {
  field: 'createdAt',
  headerName: 'common:createdAt',
  type: CellType.DATE,
  width: 200,
};

export const categoryProductColumn: HeadCell = {
  field: 'category',
  headerName: 'product:product.form.category.placeholder',
  renderCell: (category: any) => <>{category?.name}</>,
};

export const productColumns: HeadCell[] = [
  productNameColumn,
  productCodeColumn,
  productBrandColumn,
  categoryNameColumn,
  productCostPriceColumn,
  productPriceColumn,
  supplierNameColumn,
  productStatusColumn,
];

export const supplierInventoryStoreProductColumns: HeadCell[] = [
  productNameColumn,
  productCodeColumn,
  visibleProductColumn,
  productBrandColumn,
  productCostPriceColumn,
  categoryProductColumn,
  orderProductColumn,
  createdAtProductColumn
];
