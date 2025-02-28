import { ExpressDeliveryRowActions } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { EXPRESS_DELIVERY_PERMISSIONS } from 'modules/sales/settings/express-delivery/constants/express-delivery.permissions';
import { DELIVERY_SERVICE, IDelivery, ILocation } from 'modules/sales/settings/common/interfaces'
import { shippingColumns } from '../../common/constants/shipping-columns';
import { GlobalCell } from 'modules/sales/common/components/GlobalCell';

export const expressDeliveryActionsColumn: HeadCell<IDelivery> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: EXPRESS_DELIVERY_PERMISSIONS.EXPRESS_DELIVERY_WRITE,
  disablePadding: true,
  renderCell: (value, data) => <ExpressDeliveryRowActions location={data?.location as ILocation} rowId={data?._id as string} />
};

export const globalColumn: HeadCell = {
  field: 'global',
  width: 200,
  disablePadding: true,
  renderCell: (value, data) => <GlobalCell data={data} service={DELIVERY_SERVICE.EXPRESS} />
};

export const expressDeliveryColumns: Array<HeadCell<any>> = [
  ...shippingColumns,
  globalColumn,
  expressDeliveryActionsColumn
];
