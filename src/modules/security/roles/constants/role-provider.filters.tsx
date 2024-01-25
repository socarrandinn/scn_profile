import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { EmptyFilter, TermFilter } from '@dofleini/query-builder';
import { createdATFilter } from 'modules/common/constants';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

export const RoleProviderTypeFilter: Filter = {
  filter: 'role:rolType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'type',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'PRODUCT':
        return new TermFilter({ field: 'type', value: ROLE_PROVIDER_TYPE_ENUM.PRODUCT }).toQuery();
      case 'CARRIER':
        return new TermFilter({ field: 'type', value: ROLE_PROVIDER_TYPE_ENUM.CARRIER }).toQuery();
      case 'MANUFACTURER':
        return new TermFilter({ field: 'type', value: ROLE_PROVIDER_TYPE_ENUM.MANUFACTURER }).toQuery();
      case 'LOGISTIC':
        return new TermFilter({ field: 'type', value: ROLE_PROVIDER_TYPE_ENUM.LOGISTIC }).toQuery();
    }
  },
  options: [
    {
      value: 'PRODUCT',
      translate: true,
      label: 'role:roleProviderProduct',
    },
    {
      value: 'LOGISTIC',
      translate: true,
      label: 'role:roleProviderLogistic',
    },
    {
      value: 'CARRIER',
      translate: true,
      label: 'role:roleProviderCarrier',
    },
    {
      value: 'MANUFACTURER',
      translate: true,
      label: 'role:roleProviderManufacturer',
    },
  ],
};

export const roleProviderListFilters = [RoleProviderTypeFilter, createdATFilter];
