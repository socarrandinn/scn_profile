import { UsersInviteRowActions } from 'modules/security/users-invite/components/UsersInviteRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IUsersInvite } from 'modules/security/users-invite/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { USERS_INVITE_PERMISSIONS } from 'modules/security/users-invite/constants/users-invite.permissions';
import { userEmailColumn, userStatusColumn } from 'modules/security/users/constants/user.columns';
import { RolesCell } from 'modules/security/users/components/RolesCell';
import { OwnerIdCell } from 'components/libs/table/cells/OwnerIdCell';

export const usersInviteActionsColumn: HeadCell<IUsersInvite> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: USERS_INVITE_PERMISSIONS.USERS_INVITE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: UsersInviteRowActions,
};

export const userInviteRolesColumn: HeadCell = {
  field: 'roles',
  headerName: 'users:roles',
  disablePadding: true,
  renderCell: (roles: any) => <RolesCell roles={roles} />,
};

export const ownerColumn: HeadCell = {
  field: 'owner',
  headerName: 'usersInvite:inviteBy',
  renderCell: (owner: string) => <OwnerIdCell link={`/security/users/provider/${owner}/general`} owner={owner} />,
};

export const usersInviteColumns: Array<HeadCell<any>> = [
  ownerColumn,
  userEmailColumn,
  // userPhoneColumn,
  userStatusColumn,
  userInviteRolesColumn,
  createdATColumn,
  usersInviteActionsColumn,
];
