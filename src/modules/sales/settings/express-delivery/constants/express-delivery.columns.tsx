import { ExpressDeliveryRowActions } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IExpressDelivery } from 'modules/sales/settings/express-delivery/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { EXPRESS_DELIVERY_PERMISSIONS } from 'modules/sales/settings/express-delivery/constants/express-delivery.permissions';

export const expressDeliveryNameColumn: HeadCell<IExpressDelivery> = {
  field: 'name',
  headerName: 'expressDelivery:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IExpressDelivery) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const expressDeliveryDescriptionColumn: HeadCell<IExpressDelivery> = {
  field: 'description',
  headerName: 'expressDelivery:fields.description',
};

export const expressDeliveryActionsColumn: HeadCell<IExpressDelivery> = {
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
