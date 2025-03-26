import { memo, useMemo } from 'react';
import { HeaderSummaryTabs } from 'modules/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import { IconPreview } from '@dfl/mui-react-common';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useRoleDetail } from '../../contexts';
import { roleDetailsTabs } from '../../constants/role-tabs.details';
import { RoleDetailActions } from '../RoleDetailActions';
import { ROLE_ENTITY } from '../../constants/role-entities.style';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { ROLE_ROUTE_MAP } from '../../constants/role-provider.enum';

const RoleHeaderDetails = ({ type }: { type: SPACE_TYPE }) => {
  const { data: role, isLoading, error, roleId } = useRoleDetail();
  const route = useMemo(() => {
    return ROLE_ROUTE_MAP[type];
  }, [type]);

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  const tabs = roleDetailsTabs(route);

  return (
    <HeaderSummaryTabs
      title={role?.name || ''}
      subtitle={role?.description || ''}
      actions={<RoleDetailActions type={type} />}
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
        prefix={`/security/roles/${route}/${roleId}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(RoleHeaderDetails);
