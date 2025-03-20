import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';

export const auditLogChangeColumn: HeadCell<IOrderStatus> = {
  field: 'change',
  sortable: false,
  align: CellAlign.CENTER,
  headerName: 'orderStatus:fields.priority',
  width: 50,
};

export const auditLogBeforeColumn: HeadCell<IOrderStatus> = {
  field: 'description',
  headerName: 'orderStatus:fields.description',
  sortable: false,
};

export const auditLogSummaryChangeColumns: Array<HeadCell<any>> = [auditLogChangeColumn, auditLogBeforeColumn];
