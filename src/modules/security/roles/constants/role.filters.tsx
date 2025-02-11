import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { RoleProviderTypeFilter } from 'modules/security/roles/components/RoleProviderTypeFilter';

export const roleTypeFilter: Filter = {
  filter: 'role:rolType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'provider',
  field: 'provider',
  Component: RoleProviderTypeFilter,
};

export const roleFilters = [createdATFilter];
export const roleProviderFilters = [roleTypeFilter, createdATFilter];
