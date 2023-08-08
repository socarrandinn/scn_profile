import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProvideProducstDetailProvider } from 'modules/store/provider/products/context/ProvedorProductDetail';
import ProviderProductsDetailSummary
  from 'modules/store/provider/products/components/DetailSumamary/ProviderProductsDetailSummary';
import ProviderProductsDetailContent
  from 'modules/store/provider/products/components/DetailsContent/ProviderProductsDetailContent';
const logisticDetailsContainer = () => (
    <ProvideProducstDetailProvider>
    <DetailLayout marginTop={2}>
      <DetailSummary>
        <ProviderProductsDetailSummary />
      </DetailSummary>
      <DetailContent ghost>
        <ProviderProductsDetailContent />
      </DetailContent>
    </DetailLayout>
    </ProvideProducstDetailProvider>
);
export default memo(logisticDetailsContainer);
