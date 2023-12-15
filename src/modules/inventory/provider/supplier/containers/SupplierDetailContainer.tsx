import { memo } from 'react';
import { ProviderProductsDetailProvider } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import ProviderProductsDetailContent from 'modules/inventory/provider/supplier/components/DetailsContent/ProviderProductsDetailContent';
import { ProviderProductsHeaderDetails } from '../components/ProviderProductsHeaderDetails';
import { CenterPageLayout } from 'layouts/index';

const SupplierDetailContainer = () => {
  return (
    <ProviderProductsDetailProvider>
      <ProviderProductsHeaderDetails />
      <CenterPageLayout>
        <ProviderProductsDetailContent />
      </CenterPageLayout>
      {/* <DetailLayout marginTop={{ xs: 2, md: 3 }}>
        <ProviderProductsDetailContent />
         <DetailSummary>
          <ProviderProductsDetailSummary />
        </DetailSummary>
        <DetailContent ghost sx={{ '& .MuiBox-root': { paddingTop: 0 } }}></DetailContent>
      </DetailLayout> */}
    </ProviderProductsDetailProvider>
  );
};
export default memo(SupplierDetailContainer);
