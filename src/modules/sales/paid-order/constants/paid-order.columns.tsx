import { PaidOrderRowActions } from 'modules/sales/paid-order/components/PaidOrderRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { PAID_ORDER_PERMISSIONS } from 'modules/sales/paid-order/constants/paid-order.permissions';
import { OrderCodeCell } from 'modules/sales/common/components/OrderCodeCell';
import { PAID_ORDER_ROUTE } from './paid-order.route';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import {
  orderDeliveryMaxTimeColumn,
  orderGatewayColumn,
  orderInvoiceTotal,
  orderPaymentDateColumn,
  orderTotalProductColumns,
  paidOrderDeliveryTimeTypeColumn,
  paidOrderLocationColumn,
  paidOrderShippingTypeColumn,
  paidOrderStatusColumn,
} from 'modules/sales/common/constants/order-columns';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';

export const paidOrderCodeColumn: HeadCell<IOrder> = {
  field: 'code',
  headerName: 'order:code',
  disablePadding: false,
  renderCell: (code: string, data: IOrder) => (
    <OrderCodeCell value={code} link={PAID_ORDER_ROUTE.DETAIL(data?._id as string)} />
  ),
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
};

export const paidOrderActionsColumn: HeadCell<IOrder> = {
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
  paidOrderLocationColumn,
  paidOrderStatusColumn,
  paidOrderShippingTypeColumn,
  orderTotalProductColumns,
  orderDeliveryMaxTimeColumn,
  orderInvoiceTotal,
  paidOrderDeliveryTimeTypeColumn,
  orderGatewayColumn,

  orderPaymentDateColumn,
  paidOrderActionsColumn,
];
