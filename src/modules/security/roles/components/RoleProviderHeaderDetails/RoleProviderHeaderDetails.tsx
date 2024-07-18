import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import {} from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import { IconPreview } from '@dfl/mui-react-common';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { roleDetailsTabs } from '../../constants/role-tabs.details';
import { ROLE_PROVIDER_ENTITY } from '../../constants/role-entities.style';
import { useRoleProviderDetail } from '../../contexts/RoleProviderDetailContext';
import { RoleProviderDetailActions } from '../RoleProviderDetailActions';

const RoleProviderHeaderDetails = () => {
  const { data: role, isLoading, error, roleId } = useRoleProviderDetail();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  const tabs = roleDetailsTabs('providers');

  return (
    <HeaderSummaryTabs
      title={role?.name || ''}
      subtitle={role?.description || ''}
      actions={<RoleProviderDetailActions />}
      entityStyle={ROLE_PROVIDER_ENTITY}
      icon={<IconPreview value={role?.icon} size={'large'} sx={{ fontSize: 150 }} bgColor={'warning'} />}
      avatarProps={{
        sx: {
          backgroundColor: 'warning.main',
        },
      }}
    >
      <RouterTab
        tabs={tabs}
        prefix={`/security/roles/providers/${roleId}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(RoleProviderHeaderDetails);
