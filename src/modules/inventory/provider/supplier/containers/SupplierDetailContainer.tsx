import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProviderProductsDetailProvider } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import ProviderProductsDetailContent from 'modules/inventory/provider/supplier/components/DetailsContent/ProviderProductsDetailContent';
import { ProviderProductsHeaderDetails } from '../components/ProviderProductsHeaderDetails';
import ProviderProductsDetailSummary from '../components/DetailSummary/ProviderProductsDetailSummary';

const SupplierDetailContainer = () => {
  return (
    <ProviderProductsDetailProvider>
      <ProviderProductsHeaderDetails />
      <DetailLayout marginTop={{xs:2, md:3}}>
        <DetailSummary>
          <ProviderProductsDetailSummary />
        </DetailSummary>
        <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}>
          <ProviderProductsDetailContent />
        </DetailContent>
      </DetailLayout>
    </ProviderProductsDetailProvider>
  );
};
export default memo(SupplierDetailContainer);
