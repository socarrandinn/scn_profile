import { ExpressDeliveryRowActions } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { EXPRESS_DELIVERY_PERMISSIONS } from 'modules/sales/settings/express-delivery/constants/express-delivery.permissions';
import { IDelivery } from '../../home-delivery/interfaces';

export const expressDeliveryNameColumn: HeadCell<IDelivery> = {
  field: 'name',
  headerName: 'expressDelivery:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IDelivery) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const expressDeliveryDescriptionColumn: HeadCell<IDelivery> = {
  field: 'description',
  headerName: 'expressDelivery:fields.description',
};

export const expressDeliveryActionsColumn: HeadCell<IDelivery> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: EXPRESS_DELIVERY_PERMISSIONS.EXPRESS_DELIVERY_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ExpressDeliveryRowActions,
};

export const expressDeliveryColumns: Array<HeadCell<any>> = [
  expressDeliveryNameColumn,
  expressDeliveryDescriptionColumn,
  createdATColumn,
  expressDeliveryActionsColumn
];
