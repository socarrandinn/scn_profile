import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductSEOInformation } from 'modules/inventory/product/components/ProductSEO';

const ProductHistoryChangeContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <ProductSEOInformation />
    </Stack>
  );
};

export default memo(ProductHistoryChangeContainer);
