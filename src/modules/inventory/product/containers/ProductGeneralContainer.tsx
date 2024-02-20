import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductGeneralBasic } from 'modules/inventory/product/components/ProductGeneralBasic';
import { ProductGeneralOrganization } from 'modules/inventory/product/components/ProductGeneralOrganization';
import ProductScoreInformation from 'modules/inventory/product/components/ProductScore/ProductScoreInformation';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProductGeneralMediaInformation } from 'modules/inventory/product/components/ProductGeneralMedia';
import { ProductGeneralEstimatedTime } from 'modules/inventory/product/components/ProductGeneralEstimatedTime';
import { ProductGeneralOffer } from 'modules/inventory/product/components/ProductGeneralOffer';
import { ProductGeneralPerUnits } from 'modules/inventory/product/components/ProductGeneralPerUnits';
import { ProductGeneralShippingInfo } from 'modules/inventory/product/components/ProductGeneralShippingInfo';
import { ProductGeneralRelatedProducts } from 'modules/inventory/product/components/ProductGeneralRelatedProducts';
import { ProductGeneralCodeProvider } from 'modules/inventory/product/components/ProductGeneralCodeProvider';

const ProductGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary ghost>
          <ProductGeneralOrganization />
          <ProductScoreInformation />
          <ProductGeneralRelatedProducts />
        </DetailSummary>
        <DetailContent ghost>
          <ProductGeneralBasic />
          <ProductGeneralMediaInformation />
          <ProductGeneralPerUnits />
          <ProductGeneralEstimatedTime />
          <ProductGeneralCodeProvider />
          <ProductGeneralOffer />
          <ProductGeneralShippingInfo />
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(ProductGeneralContainer);
