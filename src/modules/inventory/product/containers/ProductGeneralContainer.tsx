import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductGeneralBasic } from 'modules/inventory/product/components/ProductGeneralBasic';
import { ProductGeneralOrganization } from 'modules/inventory/product/components/ProductGeneralOrganization';
import ProductScoreInformation from 'modules/inventory/product/components/ProductScore/ProductScoreInformation';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ProductGeneralMediaInformation } from 'modules/inventory/product/components/ProductGeneralMedia';
import { ProductGeneralEstimatedTime } from 'modules/inventory/product/components/ProductGeneralEstimatedTime';
import { ProductGeneralShippingInfo } from 'modules/inventory/product/components/ProductGeneralShippingInfo';
import { ProductGeneralRulesInfo } from 'modules/inventory/product/components/ProductGeneralRulesInfo';

const ProductGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}sx={{ maxWidth: 1400, marginX: 'auto' }}>
      <DetailLayout>
        <DetailSummary ghost>
          <ProductGeneralOrganization />
          <ProductScoreInformation />
        </DetailSummary>
        <DetailContent ghost sx={{ maxWidth: 900 }}>
          <ProductGeneralBasic />
          <ProductGeneralMediaInformation />
          <ProductGeneralEstimatedTime />
          <ProductGeneralShippingInfo />
          <ProductGeneralRulesInfo />
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(ProductGeneralContainer);
