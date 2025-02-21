import { HeadCell } from '@dfl/mui-admin-layout';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { SUB_ORDER_ROUTE } from './sub-order.route';
import { OrderCodeCell } from 'modules/sales/common/components/OrderCodeCell';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

export const subOrderCodeColumn: HeadCell<IOrder> = {
  field: 'code',
  headerName: 'order:code',
  disablePadding: false,
  renderCell: (code: string, data: IOrder) => (
    <OrderCodeCell value={code} link={SUB_ORDER_ROUTE.DETAIL(data?._id as string)} />
  ),
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
};
