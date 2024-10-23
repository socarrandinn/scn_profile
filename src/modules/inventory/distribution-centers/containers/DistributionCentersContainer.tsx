import { memo } from 'react';
import { DistributionCenterDetailProvider } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import DistributionCentersContent from 'modules/inventory/distribution-centers/components/DistributionCentersContent/DistributionCentersContent'
import { DistributionCentersHeaderDetails } from '../components/DistributionCentersHeaderDetails';
import { PageLayout } from 'layouts/index';
const StoreDetailContainer = () => {
  return (
    <DistributionCenterDetailProvider>
      <DistributionCentersHeaderDetails />
      <PageLayout>
        <DistributionCentersContent />
      </PageLayout>
    </DistributionCenterDetailProvider>
  );
};

export default memo(StoreDetailContainer);
