import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { RoleProviderTypeFilter } from 'modules/security/roles/components/RoleProviderTypeFilter';

export const roleTypeFilter: Filter = {
  filter: 'role:rolType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'type',
  Component: RoleProviderTypeFilter,
};

export const roleProviderListFilters = [roleTypeFilter, createdATFilter];
