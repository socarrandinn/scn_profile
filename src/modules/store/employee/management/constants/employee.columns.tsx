import { HeadCell } from '@dfl/mui-admin-layout';
    // "status": "Status",
export const productNameColumn: HeadCell = {
  field: 'fields.name',
  headerName: 'product:fields.name',
};

export const productImageColumn: HeadCell = {
  field: 'data.media[0].thumb',
  headerName: 'product:fields.image',
};

export const productCodeColumn: HeadCell = {
  field: 'data.code',
  headerName: 'product:fields.code',
};

export const productStatusColumn: HeadCell = {
  field: 'data.activo',
  headerName: 'product:fields.status',
};

export const productBrandColumn: HeadCell = {
  field: 'data.brand',
  headerName: 'product:fields.brand',
};

export const productCostPriceColumn: HeadCell = {
  field: 'data.price',
  headerName: 'product:fields.cost',
};

export const productPriceColumn: HeadCell = {
  field: 'fields.price',
  headerName: 'product:fields.price',
};

export const productColumns: HeadCell[] = [
  productImageColumn,
  productNameColumn,
  productCodeColumn,
  productStatusColumn,
  productBrandColumn,
  productCostPriceColumn,
  productPriceColumn
];
