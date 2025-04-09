import { ClientRecipientsRowActions, ClientsRowActions } from 'modules/crm/clients/components/ClientsRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IClients } from 'modules/crm/clients/interfaces';
import { createdATColumn, emailColumn, phoneColumn } from 'modules/common/constants/common.columns';
import { CLIENTS_PERMISSIONS } from 'modules/crm/clients/constants/clients.permissions';
import { IImageMedia } from 'modules/common/interfaces';
import { RolesUserCell } from 'modules/security/users/components/RolesCell';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { userFullNameColumn, userStatusColumn } from 'modules/security/users/constants/user.columns';

export const clientsNameColumn: HeadCell<IClients> = {
  field: 'fullName',
  headerName: 'clients:fields.name',
  disablePadding: false,
  renderCell: (name: string, client: IClients) => (
    <AvatarNameCell
      link={`/crm/clients/${client?._id as string}/general`}
      name={name}
      image={client?.avatar as IImageMedia}
    />
  ),
};

export const clientRolesColumn: HeadCell = {
  field: 'security.roles',
  headerName: 'clients:roles',
  disablePadding: true,
  renderCell: (roles: any) => <RolesUserCell roles={roles}></RolesUserCell>,
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
  userFullNameColumn('/crm/clients'),
  emailColumn,
  phoneColumn,
  userStatusColumn,
  createdATColumn,
  clientsActionsColumn,
];

export const recipientsColumns: Array<HeadCell<any>> = [
  clientsNameColumn,
  userStatusColumn,
  clientsRecipientsActionsColumn,
];
