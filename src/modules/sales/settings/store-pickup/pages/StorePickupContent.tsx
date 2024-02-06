import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import PickupPointContainer from '../container/PickupPointContainer';

const StorePickupContent = () => {
  
  return (
    <PageLayout>
      <PickupPointContainer />
    </PageLayout>
  );
};

export default memo(StorePickupContent);
