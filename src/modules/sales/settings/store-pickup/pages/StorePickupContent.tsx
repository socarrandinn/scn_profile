import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import PickupPointContainer from '../container/PickupPointContainer';
import { StorePickupProvider } from '../contexts/StorePickupContext';

const StorePickupContent = () => {
  return (
    <PageLayout>
      <StorePickupProvider>
        <PickupPointContainer />
      </StorePickupProvider>
    </PageLayout>
  );
};

export default memo(StorePickupContent);
