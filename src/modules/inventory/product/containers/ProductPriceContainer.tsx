import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductPrice } from 'modules/inventory/product/components/ProductPrice';

const ProductPriceContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <ProductPrice />
    </Stack>
  );
};

export default memo(ProductPriceContainer);
