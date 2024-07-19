import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import { IconPreview } from '@dfl/mui-react-common';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useRoleDetail } from '../../contexts';
import { roleDetailsTabs } from '../../constants/role-tabs.details';
import { RoleDetailActions } from '../RoleDetailActions';
import { ROLE_ENTITY } from '../../constants/role-entities.style';

const RoleHeaderDetails = () => {
  const { data: role, isLoading, error, roleId } = useRoleDetail();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  const tabs = roleDetailsTabs('system');

  return (
    <HeaderSummaryTabs
      title={role?.name || ''}
      subtitle={role?.description || ''}
      actions={<RoleDetailActions />}
      entityStyle={ROLE_ENTITY}
      icon={<IconPreview value={role?.icon} size={'large'} sx={{ fontSize: 150 }} bgColor={'error'} />}
      avatarProps={{
        sx: {
          backgroundColor: 'error.main',
        },
      }}
    >
      <RouterTab
        tabs={tabs}
        prefix={`/security/roles/system/${roleId}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(RoleHeaderDetails);
