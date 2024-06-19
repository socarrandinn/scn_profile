import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { UserService } from 'modules/security/users/services';

export const ownerFilter: Filter = {
  filter: 'usersInvite:inviteBy',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'owner',
  labelKey: 'fullName',
  field: 'owner',
  fetchFunc: UserService.search,
  fetchOption: { size: 10 },
  queryKey: USERS_LIST_KEY,
};

export const usersInviteFilters = [ownerFilter, createdATFilter];
