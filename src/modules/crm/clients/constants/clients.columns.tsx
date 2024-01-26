import { ClientsRowActions } from 'modules/crm/clients/components/ClientsRowActions';
import { CellType, EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IClients } from 'modules/crm/clients/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CLIENTS_PERMISSIONS } from 'modules/crm/clients/constants/clients.permissions';
import { UserStatus } from 'modules/security/users/components/UserStatus';

export const clientsNameColumn: HeadCell<IClients> = {
  field: 'fullName',
  headerName: 'clients:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IClients) => <EditLink entityId={data._id as string}>{name}</EditLink>,
};

export const clientsEmailColumn: HeadCell<IClients> = {
  field: 'email',
  type: CellType.EMAIL,
  headerName: 'common:email',
};

export const clientsPhoneColumn: HeadCell = {
  field: 'phone',
  type: CellType.PHONE,
  headerName: 'common:phone',
};

export const clientsStatusColumn: HeadCell = {
  field: 'status',
  headerName: 'common:status',
  component: UserStatus,
};

export const clientsActionsColumn: HeadCell<IClients> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CLIENTS_PERMISSIONS.CLIENTS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ClientsRowActions,
};

export const clientsColumns: Array<HeadCell<any>> = [
  clientsNameColumn,
  clientsEmailColumn,
  clientsPhoneColumn,
  clientsStatusColumn,
  createdATColumn,
  clientsActionsColumn,
];
