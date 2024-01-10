import { memo } from 'react';
import { StoreDetailProvider } from 'modules/inventory/store/context/StoreContext';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import StoreDetailContent from 'modules/inventory/store/components/StoreDetailContent/StoreDetailContent';
import StoreDetailInfo from '../StoreDetailInfo/StoreDetailInfo';
import { StoresHeaderDetails } from '../StoresHeaderDetails';
const StoreDetailContainer = () => {
  return (
    <StoreDetailProvider>
      <StoresHeaderDetails />
      <DetailLayout marginTop={{ xs: 2, md: 3 }}>
        <DetailSummary>
          <StoreDetailInfo />
        </DetailSummary>
        <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
          <StoreDetailContent />
        </DetailContent>
      </DetailLayout>
    </StoreDetailProvider>
  );
};

export default memo(StoreDetailContainer);
