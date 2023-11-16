import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IProduct, IProductCategory } from 'modules/inventory/product/interfaces/IProduct';
// "status": "Status",
export const productNameColumn: HeadCell = {
  field: 'name',
  headerName: 'product:fields.name',
  disablePadding: true,
  renderCell: (name: string, data: IProduct) => (
    <AvatarNameCell link={`/inventory/products/${data._id}/general`}
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
    <AvatarNameCell link={`/inventory/settings/categories/${category.categoryId}/general`} hideImage
                    name={category.name} />
  ),
};

export const productColumns: HeadCell[] = [
  productNameColumn,
  productCodeColumn,
  productBrandColumn,
  categoryNameColumn,
  productCostPriceColumn,
  productPriceColumn,
  productStatusColumn,
];
