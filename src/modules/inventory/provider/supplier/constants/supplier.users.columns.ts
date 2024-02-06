import { createdATColumn } from 'modules/common/constants';
import {
  userEmailColumn,
  userFullNameColumn,
  userPhoneColumn,
  userRolesColumn,
  userStatusColumn,
} from 'modules/security/users/constants/user.columns';

// export const supplierUsersActionsColumn: HeadCell = {
//   field: 'actions',
//   sortable: false,
//   width: 100,
//   headerName: 'actions',
//   disablePadding: true,
//   component: SupplierUserRowActions,
// };

export const supplierUsersColumns = [
  userFullNameColumn,
  userEmailColumn,
  userPhoneColumn,
  userStatusColumn,
  userRolesColumn,
  createdATColumn,
];
