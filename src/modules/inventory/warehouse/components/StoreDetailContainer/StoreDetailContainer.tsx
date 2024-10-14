import { memo } from 'react';
import { WarehouseDetailProvider } from 'modules/inventory/warehouse/context/WarehouseContext';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import StoreDetailContent from 'modules/inventory/warehouse/components/StoreDetailContent/StoreDetailContent';
import StoreDetailInfo from '../StoreDetailInfo/StoreDetailInfo';
import { StoresHeaderDetails } from '../StoresHeaderDetails';
const StoreDetailContainer = () => {
  return (
    <WarehouseDetailProvider>
      <StoresHeaderDetails />
      <DetailLayout marginTop={{ xs: 2, md: 3 }}>
        <DetailSummary>
          <StoreDetailInfo />
        </DetailSummary>
        <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
          <StoreDetailContent />
        </DetailContent>
      </DetailLayout>
    </WarehouseDetailProvider>
  );
};

export default memo(StoreDetailContainer);
