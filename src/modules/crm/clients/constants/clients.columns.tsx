import { ClientRecipientsRowActions, ClientsRowActions } from 'modules/crm/clients/components/ClientsRowActions';
import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IClients } from 'modules/crm/clients/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CLIENTS_PERMISSIONS } from 'modules/crm/clients/constants/clients.permissions';
import { UserStatus } from 'modules/security/users/components/UserStatus';
import { IImageMedia } from 'modules/common/interfaces';
import { RolesCell } from 'modules/security/users/components/RolesCell';
import { ClientCell } from 'components/libs/table/cells/ClientCell';

export const clientsNameColumn: HeadCell<IClients> = {
  field: 'fullName',
  headerName: 'clients:fields.name',
  disablePadding: false,
  renderCell: (name: string, client: IClients) => (
    <ClientCell
      link={`/crm/clients/${client._id as string}/general`}
      name={name}
      image={client.avatar as IImageMedia}
      showAvatar
    />
  ),
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

export const clientRolesColumn: HeadCell = {
  field: 'security.roles',
  headerName: 'clients:roles',
  disablePadding: true,
  renderCell: (roles: any) => <RolesCell roles={roles}></RolesCell>,
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
export const clientsRecipientsActionsColumn: HeadCell<IClients> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CLIENTS_PERMISSIONS.CLIENTS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ClientRecipientsRowActions,
};

export const clientsColumns: Array<HeadCell<any>> = [
  clientsNameColumn,
  clientsEmailColumn,
  clientsPhoneColumn,
  clientsStatusColumn,
  createdATColumn,
  clientsActionsColumn,
];

export const recipientsColumns: Array<HeadCell<any>> = [
  clientsNameColumn,
  clientsStatusColumn,
  clientsRecipientsActionsColumn,
];
