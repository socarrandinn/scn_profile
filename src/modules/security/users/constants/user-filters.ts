import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter, phoneFilter } from 'modules/common/constants/filters/common.filters';
import { EmptyFilter, FilterFactory } from '@dofleini/query-builder';
import { RoleService } from 'modules/security/roles/services';
import { getFiltersByStatus } from '../hooks/useFindUsersTable';
import { USER_STATUS } from './user-status.enum';
import { SPACE_TYPE, SPACE_TYPES_MAP } from './space-types.constants';
import { ROLES_LIST_KEY } from 'modules/security/roles/constants/queries';

export const userStatusFilter: Filter = {
  filter: 'users:status',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'user-status',
  field: 'status',
  transform: (values: string) => {
    const opt = Array.isArray(values) ? values : [values];
    let filterResult = new EmptyFilter();
    opt.forEach((value) => {
      const filterObjs = getFiltersByStatus(value);
      if (filterObjs) filterResult = FilterFactory.add(filterResult, filterObjs);
    });
    return filterResult;
  },
  options: Object.keys(USER_STATUS).map((statusType: string) => ({
    value: statusType,
    translate: true,
    label: `users:statusName.${statusType}`,
  })),
};

export const getRoleFilterByField = (type: SPACE_TYPE, field?: string) => ({
  filter: 'users:roles',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: `roles-${type.toLowerCase()}`,
  field: field || 'security.roles.role',
  labelKey: 'name',
  fetchFunc: () => RoleService.searchRolesByType(SPACE_TYPES_MAP[type]),
  fetchOption: { size: 10 },
  dependencies: [type],
  queryKey: ROLES_LIST_KEY,
});

export const acceptedATFilter: Filter = {
  filter: 'common:acceptedAt',
  translate: true,
  type: FilterType.DATE,
  key: 'acceptedAt',
  field: 'acceptedAt',
};

export const userFilters = (type: SPACE_TYPE) => [
  phoneFilter,
  userStatusFilter,
  getRoleFilterByField(type),
  createdATFilter,
];

export const userInvitationFilters = (type: SPACE_TYPE) => [
  phoneFilter,
  userStatusFilter,
  getRoleFilterByField(type),
  createdATFilter,
  acceptedATFilter,
];
