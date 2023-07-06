import { memo } from 'react';
import { StoreDetailProvider } from 'modules/store/store/context/StoreContext';
import { DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import StoreDetailContent from 'modules/store/store/components/StoreDetailContent/StoreDetailContent';

const StoreDetailContainer = () => {
  return (
       <StoreDetailProvider>
          <DetailLayout>
             <DetailSummary>
            <StoreDetailContent />
             </DetailSummary>
          </DetailLayout>
       </StoreDetailProvider>
  )
}

export default memo(StoreDetailContainer);
