import { memo } from 'react';
import { WarehouseDetailProvider } from 'modules/inventory/warehouse/context/WarehouseContext';
import StoreDetailContent from 'modules/inventory/warehouse/components/StoreDetailContent/StoreDetailContent';
import { StoresHeaderDetails } from '../components/StoresHeaderDetails';
import { PageLayout } from 'layouts/index';
const StoreDetailContainer = () => {
  return (
    <WarehouseDetailProvider>
      <StoresHeaderDetails />
      <PageLayout>
        <StoreDetailContent />
      </PageLayout>
    </WarehouseDetailProvider>
  );
};

export default memo(StoreDetailContainer);
