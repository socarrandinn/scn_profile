import { OrderStatusRowActions } from 'modules/order-status/components/OrderStatusRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { ORDER_STATUS_PERMISSIONS } from 'modules/order-status/constants/order-status.permissions';

export const orderStatusNameColumn: HeadCell<IOrderStatus> = {
  field: 'name',
  headerName: 'orderStatus:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IOrderStatus) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const orderStatusDescriptionColumn: HeadCell<IOrderStatus> = {
  field: 'description',
  headerName: 'orderStatus:fields.description',
};

export const orderStatusActionsColumn: HeadCell<IOrderStatus> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: ORDER_STATUS_PERMISSIONS.ORDER_STATUS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: OrderStatusRowActions,
};

export const orderStatusColumns: Array<HeadCell<any>> = [
  orderStatusNameColumn,
  orderStatusDescriptionColumn,
  createdATColumn,
  orderStatusActionsColumn
];
