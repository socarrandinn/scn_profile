/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/24/23
 */
import { memo } from 'react';
import { Divider, Stack } from '@mui/material';
import ProductDetail from 'modules/inventory/product/components/ProductDetail/ProductDetail';

const ProductSummary = () => {
  return (
    <Stack direction={'column'} divider={<Divider orientation='horizontal' light />} spacing={0}>
      <ProductDetail />
    </Stack>
  );
};

export default memo(ProductSummary);
