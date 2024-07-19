import { HeadCell } from '@dfl/mui-admin-layout';
import { createdATColumn } from 'modules/common/constants';
import {
  userEmailColumn,
  userFullNameColumn,
  userPhoneColumn,
  userRolesColumn,
  userStatusColumn,
} from 'modules/security/users/constants/user.columns';
import { LogisticUserRowActions } from 'modules/inventory/provider/logistics/components/LogisticUserRowActions';

export const logisticUsersActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'actions',
  disablePadding: true,
  component: LogisticUserRowActions,
};

export const logisticUsersColumns = [
  userFullNameColumn('/security/users/providers'),
  userEmailColumn,
  userPhoneColumn,
  userStatusColumn,
  userRolesColumn,
  createdATColumn,
  logisticUsersActionsColumn,
];
