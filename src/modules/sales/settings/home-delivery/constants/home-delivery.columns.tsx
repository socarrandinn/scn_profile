import { costBaseColumn, costExpressColumn, expressTimeColumn, locationColumn, timeColumn, volumeCostColumn, weightCostColumn } from 'modules/sales/settings/common/constants/shipping-columns';
import { HomeDeliveryRowActions } from 'modules/sales/settings/home-delivery/components/HomeDeliveryRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants/home-delivery.permissions';
import { GlobalCell } from 'modules/sales/common/components/GlobalCell';

export const homeDeliveryActionsColumn: HeadCell<IDelivery> = {
  field: 'actions',
  sortable: false,
  width: 170,
  cellClassName: 'min-w-[170px] max-w-[170px]',
  permissions: HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE,
  disablePadding: true,
  renderCell: (value, data) => <HomeDeliveryRowActions data={data} key={data?._id} rowId={data?._id as string} />
};

export const globalColumn: HeadCell = {
  field: 'global',
  width: 120,
  cellClassName: 'min-w-[120px] max-w-[120px]',
  align: CellAlign.CENTER,
  disablePadding: true,
  renderCell: (value, data) => <GlobalCell data={data} />
};

export const homeDeliveryColumns: Array<HeadCell<any>> = [
  locationColumn,
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
  timeColumn('homeDelivery:shipping'),
  costExpressColumn,
  expressTimeColumn('homeDelivery:shippingExpress'),
  globalColumn,
  homeDeliveryActionsColumn
];
