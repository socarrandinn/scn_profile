import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IProduct, IProductCategory, IProviderDate } from 'modules/inventory/product/interfaces/IProduct';
import { ProductStatusPicker } from 'modules/inventory/product/components/ProductStatusPicker';
import { ProductRowActions } from 'modules/inventory/product/components/ProductRowActions';
import { ProductProviderAvailability } from 'modules/inventory/product/components/ProductAvailability';
import { stockColumnAction } from './product.stock.columns';
import { RelatedProductRowActions } from '../components/RelatedProductRowActions';
import { PRODUCT_PERMISSIONS } from './product.permissions';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants';

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

export const productImageColumn: HeadCell = {
  field: 'name',
  headerName: 'product:fields.image',
  renderCell: (name: string, data: IProduct) => (
    <AvatarNameCell link={`/inventory/products/${data._id}/general`} variant={'rounded'} image={data.media?.[0]} />
  ),
};

export const productOnlyNameColumn: HeadCell = {
  field: 'media',
  headerName: 'product:fields.name',
  renderCell: (name: string, data: IProduct) => (
    <AvatarNameCell
      link={`/inventory/products/${data._id}/general`}
      hideImage
      name={data.name}
      permissions={PRODUCT_PERMISSIONS.PRODUCT_VIEW}
    />
  ),
};

export const productCodeColumn: HeadCell = {
  field: 'code',
  headerName: 'product:fields.code',
};

export const productBrandColumn: HeadCell = {
  field: 'brand',
  headerName: 'product:fields.brand',
};

export const productScoreColumn: HeadCell = {
  field: 'score',
  headerName: 'product:fields.priority',
};

export const productCostPriceColumn: HeadCell = {
  field: 'priceDetails.distribution.cost.value',
  headerName: 'product:fields.cost',
  type: CellType.CURRENCY,
  permissions: PRODUCT_PERMISSIONS.PRODUCT_PRICE,
};

export const productPriceColumn: HeadCell = {
  field: 'finalPrice',
  headerName: 'product:fields.price',
  cellClassName: 'font-bold',
  type: CellType.CURRENCY,
  permissions: PRODUCT_PERMISSIONS.PRODUCT_PRICE,
};

export const categoryNameColumn: HeadCell = {
  field: 'category',
  headerName: 'product:fields.category',
  disablePadding: false,
  renderCell: (category: IProductCategory) => (
    <AvatarNameCell
      link={`/inventory/settings/categories/${category?._id}/subcategories`}
      hideImage
      name={category?.name}
      permissions={[CATEGORY_PERMISSIONS.CATEGORY_VIEW]}
    />
  ),
};

export const supplierNameColumn: HeadCell = {
  field: 'providers.supplier',
  headerName: 'product:fields.supplier',
  disablePadding: false,
  renderCell: (supplier: IProviderDate) => (
    <AvatarNameCell
      link={`/inventory/settings/suppliers/${supplier?._id}/general`}
      hideImage
      name={supplier.name}
      permissions={[SUPPLIER_PERMISSIONS.SUPPLIER_VIEW]}
    />
  ),
};

export const visibleProductColumn: HeadCell = {
  field: 'visible',
  headerName: 'product:fields:visibility',
  renderCell: (visible, data) => <ProductStatusPicker value={visible} productId={data?._id} />,
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
  headerName: 'common:category',
  renderCell: (category: any) => <>{category?.name}</>,
};

export const productRowActionColumn: HeadCell = {
  field: 'actions',
  headerName: 'common:actions',
  width: 150,
  align: CellAlign.CENTER,
  renderCell: (value, data: IProduct) => <RelatedProductRowActions rowId={data?._id} related={data?.related || []} />,
};

export const productAvailabilityColumn: HeadCell = {
  field: '_id',
  headerName: 'product:stock.stock',
  align: CellAlign.CENTER,
  renderCell: ProductProviderAvailability,
};

export const productActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'actions',
  disablePadding: true,
  component: ProductRowActions,
  permissions: [PRODUCT_PERMISSIONS.PRODUCT_WRITE],
};

// route: inventory/products
export const productColumns: HeadCell[] = [
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
  productActionsColumn,
];

// route: inventory/settings/suppliers/:id/inventory > warehouses > productList
export const supplierInventoryStoreProductColumns: HeadCell[] = [
  productNameColumn,
  productCodeColumn,
  visibleProductColumn,
  productCostPriceColumn,
  productPriceColumn,
  categoryProductColumn,
  createdAtProductColumn,
  productAvailabilityColumn,
  stockColumnAction,
];

// route: inventory/settings/suppliers/:id/products
export const supplierProductTabColumns: HeadCell[] = [
  productNameColumn,
  productCodeColumn,
  productCostPriceColumn,
  productBrandColumn,
  categoryProductColumn,
  productScoreColumn,
  visibleProductColumn,
  createdAtProductColumn,
  // productRowActionColumn,
];

// route: inventory/settings/suppliers/:id/products
export const logisticProductTabColumns: HeadCell[] = [
  productNameColumn,
  productCodeColumn,
  productCostPriceColumn,
  productBrandColumn,
  categoryProductColumn,
  productScoreColumn,
  visibleProductColumn,
  createdAtProductColumn,
  // productRowActionColumn,
];

// route: inventory/settings/categories/:id/products
export const categoryProductTabColumns: HeadCell[] = [
  productNameColumn,
  productCodeColumn,
  productBrandColumn,
  productCostPriceColumn,
  productPriceColumn,
  supplierNameColumn,
];

export const productCollectionElementColumns: HeadCell[] = [
  productImageColumn,
  productOnlyNameColumn,
  productCodeColumn,
  supplierNameColumn,
  productBrandColumn,
  productPriceColumn,
  categoryNameColumn,
  createdAtProductColumn,
];
