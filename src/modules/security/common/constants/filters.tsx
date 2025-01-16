import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { UserAdminService } from 'modules/security/users/services';

export const getUserFilter = (filed?: string): Filter => ({
  filter: 'users:userList',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'user',
  labelKey: 'fullName',
  field: filed || 'user',
  fetchFunc: UserAdminService.search,
  fetchOption: { size: 10 },
  queryKey: USERS_LIST_KEY,
});
