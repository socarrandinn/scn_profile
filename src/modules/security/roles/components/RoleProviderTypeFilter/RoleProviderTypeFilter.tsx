import { memo } from 'react';
import { map } from 'lodash';
import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';
import { useTranslation } from 'react-i18next';

const RoleProviderTypeFilter = ({ filter, ...props }: FilterProps) => {
  const { t } = useTranslation('role');
  const data = map(PROVIDER_TYPE_ENUM, (status) => ({
    label: t(`roleProviderType.${status}`),
    value: status,
  }));
  return <FixedListFilter filter={filter} {...props} options={data} />;
};

export default memo(RoleProviderTypeFilter);
