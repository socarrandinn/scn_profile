import { UsersInviteRowActions } from 'modules/security/users-invite/components/UsersInviteRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IUsersInvite } from 'modules/security/users-invite/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { USERS_INVITE_PERMISSIONS } from 'modules/security/users-invite/constants/users-invite.permissions';

export const usersInviteNameColumn: HeadCell<IUsersInvite> = {
  field: 'name',
  headerName: 'usersInvite:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IUsersInvite) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const usersInviteDescriptionColumn: HeadCell<IUsersInvite> = {
  field: 'description',
  headerName: 'usersInvite:fields.description',
};

export const usersInviteActionsColumn: HeadCell<IUsersInvite> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: USERS_INVITE_PERMISSIONS.USERS_INVITE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: UsersInviteRowActions,
};

export const usersInviteColumns: Array<HeadCell<any>> = [
  usersInviteNameColumn,
  usersInviteDescriptionColumn,
  createdATColumn,
  usersInviteActionsColumn
];
