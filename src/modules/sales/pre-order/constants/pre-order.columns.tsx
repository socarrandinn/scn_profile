import { HeadCell } from '@dfl/mui-admin-layout';
import { OrderCodeCell } from 'modules/sales/common/components/OrderCodeCell';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { PRE_ORDER_ROUTE } from './pre-order.route';
import { PreOrderRowActions } from '../components/PreOrderRowActions';

export const preOrderCodeColumn: HeadCell<IOrder> = {
  field: 'code',
  headerName: 'order:code',
  disablePadding: false,
  renderCell: (code: string, data: IOrder) => (
    <OrderCodeCell value={code} link={PRE_ORDER_ROUTE.DETAIL(data?._id as string)} record={data} />
  ),
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
};

export const preOrderActionsColumn: HeadCell<IOrder> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: [ORDER_PERMISSIONS.ORDER_WRITE],
  headerName: 'common:actions',
  disablePadding: true,
  component: PreOrderRowActions,
};
