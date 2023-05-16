import { AdvertisementRowActions } from 'modules/rrhh/advertisement/components/AdvertisementRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { ADVERTISEMENTS_PERMISSIONS } from 'modules/rrhh/advertisement/constants/advertisement.permissions';

export const advertisementNameColumn: HeadCell<IAdvertisement> = {
  field: 'name',
  headerName: 'advertisement:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IAdvertisement) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const advertisementDescriptionColumn: HeadCell<IAdvertisement> = {
  field: 'description',
  headerName: 'advertisement:fields.description',
};

export const advertisementActionsColumn: HeadCell<IAdvertisement> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: ADVERTISEMENTS_PERMISSIONS.VIEW,
  headerName: 'common:actions',
  disablePadding: true,
  component: AdvertisementRowActions,
};

export const advertisementColumns: Array<HeadCell<any>> = [
  advertisementNameColumn,
  advertisementDescriptionColumn,
  createdATColumn,
  advertisementActionsColumn,
];
