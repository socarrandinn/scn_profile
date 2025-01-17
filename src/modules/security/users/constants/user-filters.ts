import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants/filters/common.filters';
import { EmptyFilter, FilterFactory } from '@dofleini/query-builder';
import { RoleService } from 'modules/security/roles/services';
import { ROLE_TYPE_ENUM, ROLE_TYPES_MAP } from 'modules/security/roles/constants/role-provider.enum';
import { getFiltersByStatus } from '../hooks/useFindUsersTable';
import { USER_STATUS } from './user-status.enum';

export const phoneFilter: Filter = {
  filter: 'common:phone',
  translate: true,
  type: FilterType.TEXT,
  key: 'ph',
  field: 'phone',
};

export const statusFilter: Filter = {
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

export const getRoleFilterByField = (type?: ROLE_TYPE_ENUM, field?: string) => ({
  filter: 'users:roles',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'roles',
  labelKey: 'name',
  field: field || 'security.roles.role',
  fetchFunc: () => RoleService.searchRolesByType(ROLE_TYPES_MAP[type as ROLE_TYPE_ENUM]),
  fetchOption: { size: 10 },
});

export const acceptedATFilter: Filter = {
  filter: 'common:acceptedAt',
  translate: true,
  type: FilterType.DATE,
  key: 'acceptedAt',
  field: 'acceptedAt',
};

export const rolesFilter: Filter = getRoleFilterByField(ROLE_TYPE_ENUM.ROOT);

export const userFilters = [phoneFilter, statusFilter, rolesFilter, createdATFilter, acceptedATFilter];
