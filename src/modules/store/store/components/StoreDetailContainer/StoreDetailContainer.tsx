import { memo } from 'react';
import { StoreDetailProvider } from 'modules/store/store/context/StoreContext';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import StoreDetailContent from 'modules/store/store/components/StoreDetailContent/StoreDetailContent';
import StoreDetailInfo from '../StoreDetailInfo/StoreDetailInfo';
const StoreDetailContainer = () => {
  return (
       <StoreDetailProvider>
          <DetailLayout>
             <DetailSummary>
                 <StoreDetailInfo />
             </DetailSummary>
              <DetailContent ghost>
                  <StoreDetailContent />
              </DetailContent>
          </DetailLayout>
       </StoreDetailProvider>
  )
}

export default memo(StoreDetailContainer);
