import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { map } from 'lodash';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { memo } from 'react';
import { getCustomLabel } from 'modules/security/roles/components/SelectRoleProviderType/SelectRoleProviderType';

const RoleProviderTypeFilter = ({ filter, ...props }: FilterProps) => {
  const data = map(ROLE_PROVIDER_TYPE_ENUM, (status) => ({
    label: getCustomLabel(status),
    value: status,
  }));
  return <FixedListFilter filter={filter} {...props} options={data} />;
};

export default memo(RoleProviderTypeFilter);
