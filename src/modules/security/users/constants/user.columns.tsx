import { UserStatus } from 'modules/security/users/components/UserStatus';
import { UserCell } from 'modules/security/users/components/UserCell';
import { UserRowActions } from 'modules/security/users/components/UserRowActions';
import { CellType, HeadCell } from '@dfl/mui-admin-layout';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { RolesCell } from 'modules/security/users/components/RolesCell';

export const userFullNameColumn: HeadCell = {
  field: 'fullName',
  headerName: 'users:name',
  disablePadding: true,
  renderCell: (name: string, user: any) => <UserCell userId={user._id} name={user.fullName} avatar={user.avatar} />,
};
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
  renderCell: (roles) => <RolesCell roles={roles}></RolesCell>,
};

export const userActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'actions',
  disablePadding: true,
  component: UserRowActions,
};

export const userColumns = [
  userFullNameColumn,
  userEmailColumn,
  userPhoneColumn,
  userStatusColumn,
  userRolesColumn,
  createdATColumn,
  userActionsColumn,
];
