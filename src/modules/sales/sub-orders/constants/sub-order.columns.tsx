import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { SUB_ORDER_ROUTE } from './sub-order.route';
import { OrderCodeCell } from 'modules/sales/common/components/OrderCodeCell';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { ReactLink } from '@dfl/react-security';

export const subOrderCodeColumn: HeadCell<IOrder> = {
  field: 'code',
  headerName: 'order:code',
  disablePadding: false,
  renderCell: (code: string, data: IOrder) => (
    <OrderCodeCell value={code} link={SUB_ORDER_ROUTE.DETAIL(data?._id as string)} record={data} isSubOrder />
  ),
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
};

export const subOrderDistributionCenterColumn: HeadCell<IOrder> = {
  field: 'distributionCenter',
  headerName: 'distributionCenters:name',
  disablePadding: false,
  permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
  align: CellAlign.CENTER,
  renderCell: (dc: IDistributionCenters) => (
    <ReactLink to={dc?._id as string} underline={'hover'}>
      {dc?.name}
    </ReactLink>
  ),
};
