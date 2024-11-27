import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import OperationCell from '../components/TableCell/OperationCell';
import { ProductCell, WarehouseAreaCell } from './common.column';

export const productOnlyNameColumn: HeadCell = {
  field: 'code',
  headerName: 'product:fields.name',
  maxWidth: 250,
  renderCell: (_, data: any) => (
    <AvatarNameCell variant={'rounded'} name={data?.productName} secondary={data?.code} hideLink hideImage />
  ),
  sortable: false,
};

export const warehouseAreaColumn: HeadCell = {
  field: 'areaName',
  headerName: 'stock:fields.areaName',
  renderCell: (areaName: string) => areaName,
  sortable: false,
};

export const operationColumn: HeadCell = {
  field: 'operation',
  headerName: 'stock:fields.operation',
  component: OperationCell,
  sortable: false,
};

export const quantityColumn: HeadCell = {
  field: 'quantity',
  headerName: 'stock:fields.quantity',
  align: CellAlign.CENTER,
  renderCell: (quantity: number) => quantity,
  sortable: false,
};

export const stockColumn: HeadCell = {
  field: 'stock',
  headerName: 'stock:fields.stock',
  align: CellAlign.CENTER,
  type: CellType.NUMBER,
  renderCell: (quantity: number) => quantity,
  sortable: false,
};

export const productCodeColumn: HeadCell = {
  field: 'code',
  headerName: 'stock:fields.code',
  renderCell: (code: number) => code,
  sortable: false,
};

export const reductionColumn: HeadCell = {
  field: 'quantity',
  headerName: 'stock:fields.reduction',
  align: CellAlign.CENTER,
  sortable: false,
  // component: UpdateStockCell,
  renderCell: (quantity: number) => quantity,
  width: 120,
};

export const stockReductionColumns = [productOnlyNameColumn, warehouseAreaColumn, /* stockColumn, */ reductionColumn];
export const stockAdditionColumns = [
  productOnlyNameColumn,
  warehouseAreaColumn,
  // stockColumn,
  { ...reductionColumn, headerName: 'stock:fields.quantity' },
];

export const stockWithInvalidQuantityColumns = [productOnlyNameColumn, productCodeColumn, warehouseAreaColumn];

// only warehouse product stock
export const productColumn: HeadCell = {
  field: 'item',
  headerName: 'product:name',
  component: ProductCell,
  sortable: false,
};
export const areaColumn: HeadCell = {
  field: 'warehouseArea',
  headerName: 'product:name',
  component: WarehouseAreaCell,
  sortable: false,
};

export const stockItemsColumns = [productColumn, areaColumn, quantityColumn];
