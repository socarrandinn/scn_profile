import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductRelatedProduct } from 'modules/inventory/product/components/ProductRelatedProduct';

const ProductRelatedProductContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }} sx={{ maxWidth: 1250, marginX: 'auto' }}>
      <ProductRelatedProduct />
    </Stack>
  );
};

export default memo(ProductRelatedProductContainer);
