import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import distributionCentersRoutes from 'modules/inventory/distribution-centers/routes/distributionCenters.router.';
import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';

const DistributionCentersContent = () => {
  const { distributionCenterId, isLoading } = useDistributionCenterDetail();
  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <RouteLoader
        routes={distributionCentersRoutes}
        notfoundRedirect={`/inventory/distribution-centers/${distributionCenterId}/general`}
      />
    </ConditionContainer>
  );
};

export default memo(DistributionCentersContent);
