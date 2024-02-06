import { memo } from 'react';
import { StoreDetailProvider } from 'modules/inventory/store/context/StoreContext';
import StoreDetailContent from 'modules/inventory/store/components/StoreDetailContent/StoreDetailContent';
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
