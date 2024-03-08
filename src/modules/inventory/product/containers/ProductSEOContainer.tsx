import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductSEOInformation } from 'modules/inventory/product/components/ProductSEO';

const ProductSEOContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }} sx={{ maxWidth: 1250, marginX: 'auto' }}>
      <ProductSEOInformation />
    </Stack>
  );
};

export default memo(ProductSEOContainer);
