import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductGeneralBasic } from 'modules/inventory/product/components/ProductGeneralBasic';
import { ProductGeneralOrganization } from 'modules/inventory/product/components/ProductGeneralOrganization';
import ProductScoreInformation from '../components/ProductScore/ProductScoreInformation';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
// import { ProductGeneralMediaForm } from '../components/ProductGeneralMediaForm';
import { ProductGeneralMediaInformation } from '../components/ProductGeneralMedia';

const ProductGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary>
          <ProductGeneralOrganization />
          <ProductScoreInformation />
        </DetailSummary>
        <DetailContent>
          <ProductGeneralBasic />
          <ProductGeneralMediaInformation/>
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(ProductGeneralContainer);
