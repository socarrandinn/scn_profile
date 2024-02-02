import { memo } from 'react';
import { StoreDetailProvider } from 'modules/inventory/store/context/StoreContext';
import { DetailContent, DetailLayout } from '@dfl/mui-form-layout';
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
      {/* <DetailLayout marginTop={{ xs: 1, md: 1 }}>
        <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
        </DetailContent>
      </DetailLayout> */}
    </StoreDetailProvider>
  );
};

export default memo(StoreDetailContainer);
