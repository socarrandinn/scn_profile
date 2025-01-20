import { UserStatus } from 'modules/security/users/components/UserStatus';
import { UserRowActions } from 'modules/security/users/components/UserRowActions';
import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { createdATColumn, emailColumn, phoneColumn } from 'modules/common/constants/common.columns';
import { RolesCell } from 'modules/security/users/components/RolesCell';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { getFullName } from 'utils/index';
import { IUserInvite } from '../interfaces/IUserInvite';
import { UserInvitationRowActions } from '../components/UserInvitationRowActions';

export const userFullNameColumn = (path: string): HeadCell => ({
  field: 'fullName',
  headerName: 'users:name',
  disablePadding: false,
  renderCell: (name: string, user: any) => (
    <AvatarNameCell link={`${path}/${user?._id as string}/general`} name={user?.fullName} image={user?.avatar} />
  ),
});

export const userStatusColumn: HeadCell = {
  field: 'status',
  headerName: 'users:status',
  component: UserStatus,
};

export const userRolesColumn: HeadCell = {
  field: 'security.roles',
  headerName: 'users:roles',
  disablePadding: true,
  renderCell: (roles: any) => <RolesCell roles={roles}></RolesCell>,
};

export const userInviteByColumn: HeadCell = {
  field: 'invitedBy',
  headerName: 'usersInvite:inviteBy',
  disablePadding: true,
  renderCell: (value, user: IUserInvite) => <AvatarNameCell hideImage name={getFullName(user?.invitedBy?.firstName, user?.invitedBy?.lastName)} secondary={user?.invitedBy?.email} />,
};

export const acceptedAtColumn: HeadCell = {
  field: 'acceptedAt',
  type: CellType.DATE,
  headerName: 'common:acceptedAt',
};

export const userSystemActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'actions',
  disablePadding: true,
  component: UserRowActions,
};

export const userProviderActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'actions',
  disablePadding: true,
  component: UserRowActions,
};
export const userInviteActionsColumn: HeadCell<IUserInvite> = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (value: any, data) => <UserInvitationRowActions data={data} />,
};

export const userSystemColumns = [
  userFullNameColumn('/security/users/user'),
  emailColumn,
  phoneColumn,
  userStatusColumn,
  userRolesColumn,
  createdATColumn,
  userSystemActionsColumn,
];

export const userProviderColumns = [
  userFullNameColumn('/security/users/user'),
  emailColumn,
  phoneColumn,
  userStatusColumn,
  userRolesColumn,
  createdATColumn,
  userProviderActionsColumn,
];

export const userInvitationColumns = [
  emailColumn,
  userStatusColumn,
  userRolesColumn,
  userInviteByColumn,
  createdATColumn,
  acceptedAtColumn,
  userInviteActionsColumn,
]
