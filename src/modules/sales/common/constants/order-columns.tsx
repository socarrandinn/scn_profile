import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IOrder } from '../interfaces/IOrder';
import { ORDER_PERMISSIONS } from './order-permissions';
import { OrderStatusCell } from '../components/OrderStatusCell';
import { OrderDeliveryTimeTypeCell } from '../components/OrderDeliveryTimeTypeCell';
import { OrderShippingTypeCell } from '../components/OrderShippingTypeCell';
import { OrderPaymentGateway } from '../components/OrderPaymentGateway';
import { OrderInvoiceTotalCell } from '../components/OrderInvoiceTotalCell';
import { preOrderCodeColumn } from 'modules/sales/pre-order/constants';
import { paidOrderCodeColumn } from 'modules/sales/paid-order/constants';
import {
  subOrderCodeColumn,
  subOrderDistributionCenterColumn,
} from 'modules/sales/sub-orders/constants/sub-order.columns';
import { OrderPaymentMethod } from '../components/OrderPaymentMethod';
import { DateValue } from '@dfl/mui-react-common';
import { FormattedAddressCell } from 'components/AddressCell';

const orderLocationColumn: HeadCell<IOrder> = {
  field: 'shipping',
  headerName: 'order:shipping.address.location',
  permissions: [ORDER_PERMISSIONS.VIEW_PAYMENT_INFO],
  width: 200,
  renderCell: (shipping: any) => <FormattedAddressCell address={shipping?.address} lineClamp={2} />,
};

const orderStatusColumn: HeadCell<IOrder> = {
  field: 'status',
  headerName: 'order:status.title',
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW, ORDER_PERMISSIONS.ORDER_STATUS_VIEW],
  atLessOne: false,
  sortable: false,
  align: CellAlign.CENTER,
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
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW, ORDER_PERMISSIONS.ORDER_STATUS_VIEW],
  atLessOne: false,
  align: CellAlign.CENTER,
  headerAlign: CellAlign.CENTER,
  component: OrderShippingTypeCell,
};

const orderTotalProductColumns: HeadCell<IOrder> = {
  headerName: 'order:totalProducts',
  field: 'totalProducts',
  type: CellType.NUMBER,
  align: CellAlign.CENTER,
};

/* const orderTotalItemsColumns: HeadCell<IOrder> = {
  headerName: 'order:totalItems',
  field: 'totalItems',
  type: CellType.NUMBER,
  align: CellAlign.CENTER,
}; */

/* const orderDeliveryMaxTimeColumn: HeadCell<IOrder> = {
  field: 'deliveryMaxTime',
  type: CellType.DATE,
  align: CellAlign.CENTER,
  format: 'PPpp',
  headerName: 'order:deliveryMaxTime',
}; */

const orderGatewayColumn: HeadCell<IOrder> = {
  field: 'payment.gateway',
  headerName: 'order:payment.gateway.title',
  disablePadding: true,
  align: CellAlign.CENTER,
  component: OrderPaymentGateway,
};

const orderPaymentMethodColumn: HeadCell<IOrder> = {
  field: 'payment.paymentMethod',
  headerName: 'order:payment.method.title',
  disablePadding: true,
  align: CellAlign.CENTER,
  component: OrderPaymentMethod,
};

const orderPaymentDateColumn: HeadCell<IOrder> = {
  headerName: 'order:billing.paymentDate',
  field: 'payment.paidAt',
  type: CellType.DATE,
  align: CellAlign.CENTER,
  format: 'dd/MM/yyyy | hh:mm',
  width: 160,
  permissions: [ORDER_PERMISSIONS.VIEW_PAYMENT_INFO],
};

const orderInvoiceTotal: HeadCell<IOrder> = {
  field: 'invoice.total',
  headerName: 'order:invoice.total',
  component: OrderInvoiceTotalCell,
  permissions: [ORDER_PERMISSIONS.VIEW_PAYMENT_INFO],
};

export const orderDeliveryMaxTimeColumn: HeadCell<IOrder> = {
  field: 'deliveryMaxTime',
  headerName: 'order:deliveryMaxTime',
  disablePadding: false,
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
  align: CellAlign.CENTER,
  renderCell: (deliveryMaxTime: Date) => <DateValue value={deliveryMaxTime} />,
};

const orderCreateAtColumn: HeadCell<IOrder> = {
  headerName: 'common:createdAt',
  field: 'createdAt',
  type: CellType.DATE,
  align: CellAlign.CENTER,
  format: 'dd/MM/yyyy | hh:mm',
  permissions: [ORDER_PERMISSIONS.VIEW_PAYMENT_INFO],
};

export const paidOrderColumns: Array<HeadCell<any>> = [
  paidOrderCodeColumn,
  orderLocationColumn,
  orderTotalProductColumns,
  orderInvoiceTotal,
  orderShippingTypeColumn,
  orderDeliveryTimeTypeColumn,
  orderGatewayColumn,
  orderPaymentMethodColumn,
  orderStatusColumn,
  orderPaymentDateColumn,
  // paidOrderActionsColumn,
];

export const preOrderColumns: Array<HeadCell<any>> = [
  preOrderCodeColumn,
  orderLocationColumn,
  orderTotalProductColumns,
  orderInvoiceTotal,
  orderShippingTypeColumn,
  orderDeliveryTimeTypeColumn,
  orderGatewayColumn,
  orderPaymentMethodColumn,
  orderStatusColumn,
];

export const subOrderColumns: Array<HeadCell<any>> = [
  subOrderCodeColumn,
  orderLocationColumn,
  orderTotalProductColumns,
  orderShippingTypeColumn,
  orderDeliveryTimeTypeColumn,
  // orderGatewayColumn,
  // orderDeliveryMaxTimeColumn,
  subOrderDistributionCenterColumn,
  /* orderGatewayColumn,
  orderPaymentMethodColumn, */
  orderStatusColumn,
  orderCreateAtColumn,
];
