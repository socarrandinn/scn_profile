import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { SUB_ORDER_ROUTE } from './sub-order.route';
import { OrderCodeCell } from 'modules/sales/common/components/OrderCodeCell';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { DistributionCenterIcon } from 'modules/inventory/common/components/Icons/DistributionCenterIcon';

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
    <AvatarNameCell
      link={`/inventory/distribution-centers/${dc?._id as string}/general`}
      name={dc?.name}
      icon={<DistributionCenterIcon fontSize='small' color='primary' />}
    />
  ),
};
