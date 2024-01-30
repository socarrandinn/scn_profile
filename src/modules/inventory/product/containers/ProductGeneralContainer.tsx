import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductGeneralBasic } from 'modules/inventory/product/components/ProductGeneralBasic';
import { ProductGeneralOrganization } from 'modules/inventory/product/components/ProductGeneralOrganization';
import ProductScoreInformation from '../components/ProductScore/ProductScoreInformation';

const ProductGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <ProductGeneralBasic />
      <ProductGeneralOrganization />
      <ProductScoreInformation />
    </Stack>
  );
};

export default memo(ProductGeneralContainer);
