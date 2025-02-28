import { shippingColumns } from 'modules/sales/settings/common/constants/shipping-columns';
import { HomeDeliveryRowActions } from 'modules/sales/settings/home-delivery/components/HomeDeliveryRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { DELIVERY_SERVICE, IDelivery, ILocation } from 'modules/sales/settings/common/interfaces';
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
  width: 200,
  disablePadding: true,
  renderCell: (value, data) => <GlobalCell data={data} service={DELIVERY_SERVICE.HOME} />
};

export const homeDeliveryColumns: Array<HeadCell<any>> = [
  ...shippingColumns,
  globalColumn,
  homeDeliveryActionsColumn
];
