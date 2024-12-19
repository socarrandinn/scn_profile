import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box } from '@mui/material';
import { PermissionCheck, ReactLink, RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { distributionCentersTabs } from '../../constants/distribution-centers.tabs';
import { DistributionCenterDeleteButton, DistributionCenterEditButton } from '../DistributionCenterDetailActions';
import { DISTRIBUTION_CENTER_STYLE } from '../../constants/entities.style';

import { DISTRIBUTION_CENTER_PERMISSIONS } from '../../constants';

const ProductHeaderDetails = () => {
  const { isLoading, error, distributionCenter } = useDistributionCenterDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={distributionCenter?.name || ''}
      subtitle={
        distributionCenter?.logistic?._id ? (
          <ReactLink to={`/inventory/settings/logistics/${distributionCenter.logistic._id as string}/general`}>
            {distributionCenter?.logistic?.name || ''}
          </ReactLink>
        ) : (
          distributionCenter?.logistic?.name || ''
        )
      }
      // @ts-ignore
      logo={distributionCenter?.image}
      actions={<Actions />}
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

export default memo(ProductHeaderDetails);

export const Actions = () => {
  return (
    <PermissionCheck permissions={DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE}>
      <Box gap={1} display={'flex'}>
        <DistributionCenterEditButton />
        <DistributionCenterDeleteButton />
      </Box>
    </PermissionCheck>
  );
};
