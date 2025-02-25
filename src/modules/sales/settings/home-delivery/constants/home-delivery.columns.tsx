import { HomeDeliveryRowActions } from 'modules/sales/settings/home-delivery/components/HomeDeliveryRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IDelivery, ILocation } from 'modules/sales/settings/home-delivery/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants/home-delivery.permissions';

export const homeDeliveryNameColumn: HeadCell<IDelivery> = {
  field: 'name',
  headerName: 'homeDelivery:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IDelivery) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const homeDeliveryDescriptionColumn: HeadCell<IDelivery> = {
  field: 'description',
  headerName: 'homeDelivery:fields.description',
};

export const homeDeliveryActionsColumn: HeadCell<IDelivery> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE,
  disablePadding: true,
  renderCell: (value, data) => <HomeDeliveryRowActions location={data?.location as ILocation} rowId={data?._id as string} />
};

export const homeDeliveryColumns: Array<HeadCell<any>> = [
  homeDeliveryNameColumn,
  homeDeliveryDescriptionColumn,
  createdATColumn,
  homeDeliveryActionsColumn
];
