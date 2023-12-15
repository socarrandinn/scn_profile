import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProviderProductsDetailProvider } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import ProviderProductsDetailContent from 'modules/inventory/provider/supplier/components/DetailsContent/ProviderProductsDetailContent';
import { ProviderProductsHeaderDetails } from '../components/ProviderProductsHeaderDetails';
import ProviderProductsDetailSummary from '../components/DetailSummary/ProviderProductsDetailSummary';

const logisticDetailsContainer = () => {
  return (
    <ProviderProductsDetailProvider>
      <ProviderProductsHeaderDetails />
      <DetailLayout marginTop={2}>
        <DetailSummary>
          <ProviderProductsDetailSummary />
        </DetailSummary>
        <DetailContent ghost>
          <ProviderProductsDetailContent />
        </DetailContent>
      </DetailLayout>
    </ProviderProductsDetailProvider>
  );
};
export default memo(logisticDetailsContainer);
