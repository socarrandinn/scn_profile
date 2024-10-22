import { PaidOrderRowActions } from 'modules/sales/paid-order/components/PaidOrderRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { OrderCodeCell } from 'modules/sales/common/components/OrderCodeCell';
import { PAID_ORDER_ROUTE } from './paid-order.route';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
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
  permissions: [ORDER_PERMISSIONS.ORDER_WRITE],
  headerName: 'common:actions',
  disablePadding: true,
  component: PaidOrderRowActions,
};
