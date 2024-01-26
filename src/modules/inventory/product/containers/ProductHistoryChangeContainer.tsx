import { Stack } from '@mui/material';
import { memo } from 'react';
import {
  ProductHistoryChangeHeader,
  ProductHistoryChangeInformation,
} from 'modules/inventory/product/components/ProductHistoryChange';

const ProductHistoryChangeContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }} gap={{ xs: 1, md: 2 }}>
      <ProductHistoryChangeHeader />
      <ProductHistoryChangeInformation />
    </Stack>
  );
};

export default memo(ProductHistoryChangeContainer);
