import { UserStatus } from 'modules/security/users/components/UserStatus';
import { UserCell } from 'modules/security/users/components/UserCell';
import { UserRowActions } from 'modules/security/users/components/UserRowActions';
import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { RolesCell } from 'modules/security/users/components/RolesCell';
import UserProviderRowActions from '../components/UserRowActions/UserProviderRowActions';

export const userFullNameColumn = (path: string): HeadCell => ({
  field: 'fullName',
  headerName: 'users:name',
  disablePadding: true,
  renderCell: (name: string, user: any) => (
    <UserCell path={path} userId={user._id} name={user.fullName} avatar={user.avatar} />
  ),
});

export const userEmailColumn: HeadCell = {
  field: 'email',
  type: CellType.EMAIL,
  headerName: 'common:email',
};
export const userPhoneColumn: HeadCell = {
  field: 'phone',
  type: CellType.PHONE,
  headerName: 'common:phone',
};
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
  component: UserProviderRowActions,
};

export const userSystemColumns = [
  userFullNameColumn('/security/users'),
  userEmailColumn,
  userPhoneColumn,
  userStatusColumn,
  userRolesColumn,
  createdATColumn,
  userSystemActionsColumn,
];

export const userProviderColumns = [
  userFullNameColumn('/security/providers-users/users'),
  userEmailColumn,
  userPhoneColumn,
  userStatusColumn,
  userRolesColumn,
  createdATColumn,
  userProviderActionsColumn,
];
