import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProvideProducstDetailProvider } from 'modules/provider/products/context/ProvedorProductDetail';
import ProviderProductsDetailSummary
  from 'modules/provider/products/components/DetailSumamary/ProProductsDetailSummary';
const logisticDetailsContainer = () => (
    <ProvideProducstDetailProvider>
    <DetailLayout marginTop={2}>
      <DetailSummary>
        <ProviderProductsDetailSummary />
      </DetailSummary>
      <DetailContent ghost>
      </DetailContent>
    </DetailLayout>
    </ProvideProducstDetailProvider>
);
export default memo(logisticDetailsContainer);
