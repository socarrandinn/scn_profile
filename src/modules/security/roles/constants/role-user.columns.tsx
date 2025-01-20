import { HeadCell } from '@dfl/mui-admin-layout';
import { emailColumn } from 'modules/common/constants';
import { RoleUsersRowActions } from 'modules/security/roles/components/RoleUsersRowActions';
import { userStatusColumn } from 'modules/security/users/constants/user.columns';

export const roleUserActionColumn = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'actions',
  disablePadding: true,
  component: RoleUsersRowActions,
};

export const userColumns: HeadCell[] = [emailColumn, userStatusColumn, roleUserActionColumn];
