import { PaidOrderRowActions } from 'modules/sales/paid-order/components/PaidOrderRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';
import { PAID_ORDER_PERMISSIONS } from 'modules/sales/paid-order/constants/paid-order.permissions';
import { OrderCodeCell } from 'modules/sales/common/components/OrderCodeCell';
import { PAID_ORDER_ROUTE } from './paid-order.route';
import { OrderLocationCell } from 'modules/sales/common/components/OrderLocationCell';
import { OrderStatusCell } from 'modules/sales/common/components/OrderStatusCell';

export const paidOrderCodeColumn: HeadCell<IPaidOrder> = {
  field: 'code',
  headerName: 'paidOrder:fields.code',
  disablePadding: false,
  renderCell: (code: string) => <OrderCodeCell value={code} link={PAID_ORDER_ROUTE.EDIT} />,
};

export const paidOrderLocationColumn: HeadCell<IPaidOrder> = {
  field: 'shipping',
  headerName: 'paidOrder:fields.shipping',
  component: OrderLocationCell,
};

export const paidOrderStatusColumn: HeadCell<IPaidOrder> = {
  field: 'status',
  headerName: 'paidOrder:fields.status',
  component: OrderStatusCell,
};

export const paidOrderActionsColumn: HeadCell<IPaidOrder> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PAID_ORDER_PERMISSIONS.PAID_ORDER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: PaidOrderRowActions,
};

export const paidOrderColumns: Array<HeadCell<any>> = [
  paidOrderCodeColumn,
  /* paidOrderLocationColumn,
  paidOrderStatusColumn,
  createdATColumn,
  paidOrderActionsColumn, */
];
