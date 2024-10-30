import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';
import { distributionCenterUsersTabs } from '../../constants/distribution-center-users-tabs.details';
import distributionCenterUserTabRoutes from '../../routes/users-router-tabs';

const DistributionCenterUserTabList = () => {
  const { distributionCenterId } = useDistributionCenterDetail();
  return (
    <PageTabPaperLayout
      prefix={`/inventory/distribution-centers/${distributionCenterId}/users`}
      tabs={distributionCenterUsersTabs}
    >
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader
          routes={distributionCenterUserTabRoutes}
          notfoundRedirect={`/inventory/distribution-centers/${distributionCenterId}/users/users`}
        />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default DistributionCenterUserTabList;
