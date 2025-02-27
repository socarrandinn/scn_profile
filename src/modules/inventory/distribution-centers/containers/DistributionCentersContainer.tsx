import { memo, Suspense } from 'react';
import { DistributionCenterDetailProvider } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import DistributionCentersContent from 'modules/inventory/distribution-centers/components/DistributionCentersContent/DistributionCentersContent';
import { DistributionCentersHeaderDetails } from '../components/DistributionCentersHeaderDetails';
import { PageLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';

const DistributionCenterContainer = () => {
  return (
    <PageLayout>
      <DistributionCenterDetailProvider>
        <DistributionCentersHeaderDetails />
        <Suspense fallback={<PageLoader size='page' />}>
          <DistributionCentersContent />
        </Suspense>
      </DistributionCenterDetailProvider>
    </PageLayout>
  );
};

export default memo(DistributionCenterContainer);
