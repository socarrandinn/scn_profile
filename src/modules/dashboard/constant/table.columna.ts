import { HeadCell } from '@dfl/mui-admin-layout';

export const userProductNameColumn: HeadCell = {
  field: 'productName',
  translate: true,
  headerName: 'report:report.inventory.table.productName',
};

export const stockColumn: HeadCell = {
  field: 'stock',
  translate: true,
  headerName: 'report:report.inventory.table.stock',
  disablePadding: true,
};
export const countStockColumn: HeadCell = {
  field: 'countStock',
  translate: true,
  headerName: 'report:report.inventory.table.countStock',
  disablePadding: true,
};

export const columnsTable: HeadCell[] = [userProductNameColumn, countStockColumn, stockColumn];
