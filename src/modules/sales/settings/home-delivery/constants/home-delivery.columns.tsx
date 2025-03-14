import { centerLocationColumn, costBaseColumn, expressTimeColumn, locationColumn, shippingColumns, timeColumn, volumeCostColumn, weightCostColumn } from 'modules/sales/settings/common/constants/shipping-columns';
import { HomeDeliveryRowActions } from 'modules/sales/settings/home-delivery/components/HomeDeliveryRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IDelivery, ILocation } from 'modules/sales/settings/common/interfaces';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants/home-delivery.permissions';
import { GlobalCell } from 'modules/sales/common/components/GlobalCell';

export const homeDeliveryActionsColumn: HeadCell<IDelivery> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE,
  disablePadding: true,
  renderCell: (value, data) => <HomeDeliveryRowActions location={data?.location as ILocation} rowId={data?._id as string} />
};

export const globalColumn: HeadCell = {
  field: 'global',
  width: 250,
  disablePadding: true,
  renderCell: (value, data) => <GlobalCell data={data} />
};

export const homeDeliveryColumns: Array<HeadCell<any>> = [
  locationColumn,
  costBaseColumn('price'),
  costBaseColumn('expressPrice', 'homeDelivery:fields.expressCost'),
  weightCostColumn,
  volumeCostColumn,
  timeColumn('homeDelivery:shipping'),
  expressTimeColumn('homeDelivery:shippingExpress'),
  globalColumn,
  homeDeliveryActionsColumn
];

export const homeDeliveryCenterColumns: Array<HeadCell<any>> = [
  centerLocationColumn,
  timeColumn('homeDelivery:shipping', 50),
  expressTimeColumn('homeDelivery:shippingExpress', 50),
];
