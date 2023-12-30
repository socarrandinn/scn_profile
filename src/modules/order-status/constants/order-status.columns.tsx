import { OrderStatusRowActions } from 'modules/order-status/components/OrderStatusRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { ORDER_STATUS_PERMISSIONS } from 'modules/order-status/constants/order-status.permissions';
import ColorWithTitle from '../components/ColorWithTitle/ColorWithTitle';
import StatusTag from '../components/StatusTag/StatusTag';
import TrackingStatusPicker from '../components/TrackingStatusPicker/TrackingStatusPicker';

export const orderStatusTitleColumn: HeadCell<IOrderStatus> = {
  field: 'title',
  headerName: 'orderStatus:fields.title',
  disablePadding: false,
  width: 300,
  renderCell: (title: string, data: IOrderStatus) => (
    <ColorWithTitle color={data.color as string} id={data._id || ''} title={data.title} data={data} />
  ),
};

export const orderStatusPriorityColumn: HeadCell<IOrderStatus> = {
  field: 'order',
  headerName: 'orderStatus:fields.priority',
  width: 50,
};

export const orderStatusDescriptionColumn: HeadCell<IOrderStatus> = {
  field: 'description',
  headerName: 'orderStatus:fields.description',
};

export const orderStatusStatusColumn: HeadCell<IOrderStatus> = {
  field: 'status',
  align: CellAlign.CENTER,
  headerName: 'orderStatus:fields.status',
  renderCell: (status: string) => <StatusTag status={status} />,
};
export const orderStatusTrackingColumn: HeadCell<IOrderStatus> = {
  field: 'tracking',
  align: CellAlign.CENTER,
  width: 250,
  headerName: 'orderStatus:fields.tracking',
  component: TrackingStatusPicker,
};

export const orderStatusActionsColumn: HeadCell<IOrderStatus> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: ORDER_STATUS_PERMISSIONS.ORDER_STATUS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (action: any, data: IOrderStatus) => (
    /// @ts-ignore
    <OrderStatusRowActions allowDeleteAction={!data.isSystem} rowId={data._id} />
  ),
};

export const orderStatusColumns: Array<HeadCell<any>> = [
  orderStatusTitleColumn,
  orderStatusPriorityColumn,
  orderStatusDescriptionColumn,
  orderStatusStatusColumn,
  orderStatusTrackingColumn,
  orderStatusActionsColumn,
];
