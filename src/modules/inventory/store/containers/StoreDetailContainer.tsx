import { memo } from 'react';
import { StoreDetailProvider } from 'modules/inventory/store/context/StoreContext';
import { DetailContent, DetailLayout } from '@dfl/mui-form-layout';
import StoreDetailContent from 'modules/inventory/store/components/StoreDetailContent/StoreDetailContent';
import { StoresHeaderDetails } from '../components/StoresHeaderDetails';
const StoreDetailContainer = () => {
  return (
    <StoreDetailProvider>
      <DetailLayout marginTop={{ xs: 2, md: 3 }}>
        <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
          <StoresHeaderDetails />
          <StoreDetailContent />
        </DetailContent>
      </DetailLayout>
    </StoreDetailProvider>
  );
};

export default memo(StoreDetailContainer);
