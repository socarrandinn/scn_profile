import { memo } from 'react';
import { StoreDetailProvider } from 'modules/inventory/warehouse/context/StoreContext';
import StoreDetailContent from 'modules/inventory/warehouse/components/StoreDetailContent/StoreDetailContent';
import { StoresHeaderDetails } from '../components/StoresHeaderDetails';
import { PageLayout } from 'layouts/index';
const StoreDetailContainer = () => {
  return (
    <StoreDetailProvider>
      <StoresHeaderDetails />
      <PageLayout>
        <StoreDetailContent />
      </PageLayout>
    </StoreDetailProvider>
  );
};

export default memo(StoreDetailContainer);
