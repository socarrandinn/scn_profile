import { OrderStatusRowActions } from 'modules/sales/settings/order-status/components/OrderStatusRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { ORDER_STATUS_PERMISSIONS } from 'modules/sales/settings/order-status/constants/order-status.permissions';
import ColorWithTitle from '../components/ColorWithTitle/ColorWithTitle';
import StatusTag from '../components/StatusTag/StatusTag';
import UpdateTrackingStatusContainer from '../containers/UpdateTrackingStatusContainer';
import NotificationStatus from '../components/NotificationStatus/NotificationStatus';

export const orderStatusTitleColumn: HeadCell<IOrderStatus> = {
  field: 'title',
  headerName: 'orderStatus:fields.title',
  disablePadding: false,
  width: 300,
  renderCell: (_: string, data: IOrderStatus) => (
    <ColorWithTitle color={data.color as string} id={data._id || ''} title={data.title} />
  ),
};

export const orderStatusPriorityColumn: HeadCell<IOrderStatus> = {
  field: 'order',
  sortable: false,
  align: CellAlign.CENTER,
  headerName: 'orderStatus:fields.priority',
  width: 50,
};

export const orderStatusDescriptionColumn: HeadCell<IOrderStatus> = {
  field: 'description',
  headerName: 'orderStatus:fields.description',
  sortable: false,
};

export const orderStatusNotificationColumn: HeadCell<IOrderStatus> = {
  field: 'notification',
  headerName: 'orderStatus:fields.notification.title',
  sortable: false,
  align: CellAlign.CENTER,
  component: NotificationStatus,
};

export const orderStatusStatusColumn: HeadCell<IOrderStatus> = {
  field: 'type',
  align: CellAlign.CENTER,
  headerName: 'orderStatus:fields.status',
  sortable: false,
  component: StatusTag,
};
export const orderStatusTrackingColumn: HeadCell<IOrderStatus> = {
  field: 'tracking',
  align: CellAlign.CENTER,
  width: 250,
  headerName: 'orderStatus:fields.tracking',
  sortable: false,
  component: UpdateTrackingStatusContainer,
};

export const orderStatusActionsColumn: HeadCell<IOrderStatus> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: ORDER_STATUS_PERMISSIONS.ORDER_STATUS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (action: any, data: IOrderStatus, index) => (
    /// @ts-ignore
    <OrderStatusRowActions allowDeleteAction={!data.isSystem} rowId={data._id} index={index} order={data.order} />
  ),
};

export const orderStatusColumns: Array<HeadCell<any>> = [
  orderStatusTitleColumn,
  orderStatusPriorityColumn,
  orderStatusDescriptionColumn,
  orderStatusNotificationColumn,
  orderStatusStatusColumn,
  orderStatusTrackingColumn,
  orderStatusActionsColumn,
];
