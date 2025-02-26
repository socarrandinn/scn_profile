import { HomeDeliveryRowActions } from 'modules/sales/settings/home-delivery/components/HomeDeliveryRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IDelivery, ILocation } from 'modules/sales/settings/home-delivery/interfaces';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants/home-delivery.permissions';
import { shippingColumns } from '../../common/constants/shipping-columns';

export const homeDeliveryActionsColumn: HeadCell<IDelivery> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE,
  disablePadding: true,
  renderCell: (value, data) => <HomeDeliveryRowActions location={data?.location as ILocation} rowId={data?._id as string} />
};

export const homeDeliveryColumns: Array<HeadCell<any>> = [
  ...shippingColumns,
  homeDeliveryActionsColumn
];
