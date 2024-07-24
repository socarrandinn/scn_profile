import { memo } from 'react';
import { map } from 'lodash';
import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { getCustomLabel } from 'modules/security/roles/components/SelectRoleProviderType/SelectRoleProviderType';
import { useTranslation } from 'react-i18next';

const RoleProviderTypeFilter = ({ filter, ...props }: FilterProps) => {
  const { t } = useTranslation('role');
  const data = map(ROLE_PROVIDER_TYPE_ENUM, (status) => ({
    label: getCustomLabel(status, t),
    value: status,
  }));
  return <FixedListFilter filter={filter} {...props} options={data} />;
};

export default memo(RoleProviderTypeFilter);
