import { ExpressDeliveryRowActions } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { EXPRESS_DELIVERY_PERMISSIONS } from 'modules/sales/settings/express-delivery/constants/express-delivery.permissions';
import { IDelivery } from '../../home-delivery/interfaces';
import { shippingColumns } from '../../common/constants/shipping-columns';

export const expressDeliveryActionsColumn: HeadCell<IDelivery> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: EXPRESS_DELIVERY_PERMISSIONS.EXPRESS_DELIVERY_WRITE,
  disablePadding: true,
  component: ExpressDeliveryRowActions,
};

export const expressDeliveryColumns: Array<HeadCell<any>> = [
  ...shippingColumns,
  expressDeliveryActionsColumn
];
