import { HomeDeliveryRowActions } from 'modules/sales/settings/home-delivery/components/HomeDeliveryRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants/home-delivery.permissions';

export const homeDeliveryNameColumn: HeadCell<IHomeDelivery> = {
  field: 'name',
  headerName: 'homeDelivery:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IHomeDelivery) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const homeDeliveryDescriptionColumn: HeadCell<IHomeDelivery> = {
  field: 'description',
  headerName: 'homeDelivery:fields.description',
};

export const homeDeliveryActionsColumn: HeadCell<IHomeDelivery> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE,
  disablePadding: true,
  component: HomeDeliveryRowActions,
};

export const homeDeliveryColumns: Array<HeadCell<any>> = [
  homeDeliveryNameColumn,
  homeDeliveryDescriptionColumn,
  createdATColumn,
  homeDeliveryActionsColumn
];
