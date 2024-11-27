import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ProductCell, ReductionCauseCell, WarehouseAreaCell, WarehouseCell } from './common.column';

// only warehouse product stock
export const productColumn: HeadCell = {
  field: 'response.payload.item',
  headerName: 'product:name',
  component: ProductCell,
  sortable: false,
  maxWidth: 200,
};
export const areaColumn: HeadCell = {
  field: 'response.payload.warehouseArea',
  headerName: 'warehouseArea:select',
  component: WarehouseAreaCell,
  sortable: false,
};
export const warehouseColumn: HeadCell = {
  field: 'response.payload.warehouse',
  headerName: 'stock:fields.warehouse',
  component: WarehouseCell,
  sortable: false,
};
export const reductionCauseColumn: HeadCell = {
  field: 'response.payload.cause',
  headerName: 'stock:fields.reductionCause',
  component: ReductionCauseCell,
  sortable: false,
};

export const reductionColumn: HeadCell = {
  field: 'response.payload.quantity',
  headerName: 'stock:fields.reduction',
  align: CellAlign.CENTER,
  type: CellType.NUMBER,
  sortable: false,

  renderCell: (quantity: number) => `-${quantity}`,
};

export const dataErrorInsufficientStockColumn = [
  productColumn,
  warehouseColumn,
  // areaColumn,
  reductionCauseColumn,
  reductionColumn,
];
