import { memo, useMemo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import { IconPreview } from '@dfl/mui-react-common';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';
import { ROLE_ENTITY } from 'modules/security/roles/constants/role-entities.style';
import { INCIDENCE_ENTITY } from 'modules/sales/constants/sales.entities.styles';
import { incidenceTabs } from '../../constants/incidence-tabs';

const IncidenceHeaderDetails = () => {
  const { incidence, isLoading, error, incidenceId } = useIncidenceDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={incidence?.name || ''}
      subtitle={incidence?.description || ''}
      actions={<></>}
      entityStyle={INCIDENCE_ENTITY}
    >
      <RouterTab
        tabs={incidenceTabs}
        prefix={`/sales/incidences/${incidenceId}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(IncidenceHeaderDetails);
