import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { ReactLink, RouterTab, useSecurity } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { distributionCentersTabs } from '../../constants/distribution-centers.tabs';
import { DISTRIBUTION_CENTER_STYLE } from '../../constants/entities.style';
import DistributionCenterHeaderActions from './DistributionCenterHeaderActions';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';


const DistributionCenterHeaderDetails = () => {
  const { isLoading, error, distributionCenter } = useDistributionCenterDetail();
  const { hasPermission } = useSecurity();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton hideImage />;

  return (
    <HeaderSummaryTabs
      title={distributionCenter?.name || ''}
      subtitle={
        (distributionCenter?.logistic?._id && hasPermission(LOGISTICS_PERMISSIONS.LOGISTICS_VIEW)) ? (
          <ReactLink to={`/inventory/settings/logistics/${distributionCenter.logistic._id as string}/general`}>
            {distributionCenter?.logistic?.name || ''}
          </ReactLink>
        ) : (
          distributionCenter?.logistic?.name || ''
        )
      }
      actions={
        <DistributionCenterHeaderActions
          visible={distributionCenter?.visible || false}
          id={distributionCenter?._id || ''}
        />
      }
      entityStyle={DISTRIBUTION_CENTER_STYLE}
    >
      <RouterTab
        tabs={distributionCentersTabs}
        prefix={`/inventory/distribution-centers/${distributionCenter?._id as string}`}
        translationNs={'distributionCenters'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(DistributionCenterHeaderDetails);
