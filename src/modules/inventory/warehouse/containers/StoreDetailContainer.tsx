import { memo, Suspense } from 'react';
import { WarehouseDetailProvider } from 'modules/inventory/warehouse/context/WarehouseContext';
import StoreDetailContent from 'modules/inventory/warehouse/components/StoreDetailContent/StoreDetailContent';
import { WarehouseHeaderDetails } from '../components/StoresHeaderDetails';
import { PageLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
const StoreDetailContainer = () => {
  return (
    <PageLayout>
      <WarehouseDetailProvider>
        <WarehouseHeaderDetails />
        <Suspense fallback={<PageLoader size='page' />}>
          <StoreDetailContent />
        </Suspense>
      </WarehouseDetailProvider>
    </PageLayout>
  );
};

export default memo(StoreDetailContainer);
