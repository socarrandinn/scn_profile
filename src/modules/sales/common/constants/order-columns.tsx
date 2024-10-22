import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IOrder } from '../interfaces/IOrder';
import { ORDER_PERMISSIONS } from './order-permissions';
import { OrderLocationCell } from '../components/OrderLocationCell';
import { OrderStatusCell } from '../components/OrderStatusCell';
import { OrderDeliveryTimeTypeCell } from '../components/OrderDeliveryTimeTypeCell';
import { OrderShippingTypeCell } from '../components/OrderShippingTypeCell';
import { OrderPaymentMethod } from '../components/OrderPaymentMethod';
import { OrderInvoiceTotalCell } from '../components/OrderInvoiceTotalCell';
import { preOrderActionsColumn, preOrderCodeColumn } from 'modules/sales/pre-order/constants';
import { paidOrderActionsColumn, paidOrderCodeColumn } from 'modules/sales/paid-order/constants';

const orderLocationColumn: HeadCell<IOrder> = {
  field: 'shipping',
  headerName: 'order:shipping.address.location',
  permissions: [ORDER_PERMISSIONS.VIEW_PAYMENT_INFO],
  component: OrderLocationCell,
};

const orderStatusColumn: HeadCell<IOrder> = {
  field: 'status',
  headerName: 'order:status.title',
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW, ORDER_PERMISSIONS.ORDER_STATUS_VIEW],
  atLessOne: false,
  component: OrderStatusCell,
};

const orderDeliveryTimeTypeColumn: HeadCell<IOrder> = {
  field: 'shipping.deliveryTimeType',
  headerName: 'order:shipping.deliveryTimeType.title',
  component: OrderDeliveryTimeTypeCell,
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW, ORDER_PERMISSIONS.ORDER_STATUS_VIEW],
  atLessOne: false,
};

const orderShippingTypeColumn: HeadCell<IOrder> = {
  headerName: 'order:shipping.shippingType.title',
  field: 'shipping.shippingType',
  component: OrderShippingTypeCell,
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW, ORDER_PERMISSIONS.ORDER_STATUS_VIEW],
  atLessOne: false,
  align: CellAlign.CENTER,
  headerAlign: CellAlign.CENTER,
};

const orderTotalProductColumns: HeadCell<IOrder> = {
  headerName: 'order:totalProducts',
  field: 'totalProducts',
  type: CellType.NUMBER,
  align: CellAlign.CENTER,
};

/* const orderDeliveryMaxTimeColumn: HeadCell<IOrder> = {
  field: 'deliveryMaxTime',
  type: CellType.DATE,
  align: CellAlign.CENTER,
  format: 'PPpp',
  headerName: 'order:deliveryMaxTime',
}; */

const orderGatewayColumn: HeadCell<IOrder> = {
  field: 'billing.gateway',
  headerName: 'order:gateway.title',
  disablePadding: true,
  component: OrderPaymentMethod,
};

const orderPaymentDateColumn: HeadCell<IOrder> = {
  headerName: 'order:billing.paymentDate',
  field: 'billing.paymentDate',
  type: CellType.DATE,
  align: CellAlign.CENTER,
  format: 'PPpp',
  permissions: [ORDER_PERMISSIONS.VIEW_PAYMENT_INFO],
  width: 120,
};

const orderInvoiceTotal: HeadCell<IOrder> = {
  field: 'invoice.total',
  headerName: 'order:invoice.total',
  component: OrderInvoiceTotalCell,
};

export const paidOrderColumns: Array<HeadCell<any>> = [
  paidOrderCodeColumn,
  orderLocationColumn,
  orderStatusColumn,
  orderShippingTypeColumn,
  orderTotalProductColumns,
  // orderDeliveryMaxTimeColumn,
  orderInvoiceTotal,
  orderDeliveryTimeTypeColumn,
  orderGatewayColumn,
  orderPaymentDateColumn,
  paidOrderActionsColumn,
];

export const preOrderColumns: Array<HeadCell<any>> = [
  preOrderCodeColumn,
  orderLocationColumn,
  orderStatusColumn,
  orderShippingTypeColumn,
  orderTotalProductColumns,
  // orderDeliveryMaxTimeColumn,
  orderInvoiceTotal,
  orderDeliveryTimeTypeColumn,
  orderGatewayColumn,
  orderPaymentDateColumn,
  preOrderActionsColumn,
];
