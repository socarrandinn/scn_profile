import { AdvertisementRowActions } from 'modules/rrhh/advertisement/components/AdvertisementRowActions';
import { CellType, EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { ADVERTISEMENTS_PERMISSIONS } from 'modules/rrhh/advertisement/constants/advertisement.permissions';
import { TypeCell } from 'modules/rrhh/advertisement/components/TypeCell';
import { AudienceCell } from 'modules/rrhh/advertisement/components/AudienceCell';
import { LongText } from '@dfl/mui-react-common';

export const advertisementNameColumn: HeadCell<IAdvertisement> = {
  field: 'name',
  headerName: 'advertisement:fields.name',
  disablePadding: false,
  width: 200,
  renderCell: (name: string, data: IAdvertisement) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const advertisementMessageColumn: HeadCell<IAdvertisement> = {
  field: 'message',
  headerName: 'advertisement:fields.message',
  renderCell: (message: string) => <LongText text={message} lineClamp={2}/>
};

export const advertisementTypeColumn: HeadCell<IAdvertisement> = {
  field: 'type',
  headerName: 'advertisement:fields.type',
  disablePadding: false,
  renderCell: (name: string, data: IAdvertisement) => <TypeCell type={data?.type}/>,
};

export const advertisementAudienceColumn: HeadCell<IAdvertisement> = {
  field: 'audience',
  headerName: 'advertisement:fields.audience',
  renderCell: (name: string, data: IAdvertisement) => <AudienceCell audience={data?.audience}/>,
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
  advertisementMessageColumn,
  advertisementTypeColumn,
  advertisementAudienceColumn,
  createdATColumn,
  advertisementActionsColumn,
];
