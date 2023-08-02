import React, { memo } from 'react';
import { Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { useProductDetail } from 'modules/store/product/contexts/ProductDetail';

const ProductDetail = () => {
  const { product, isLoading, error } = useProductDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }
  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} spacing={2}>
      details
      {JSON.stringify(product)}
    </Stack>
  );
};

export default memo(ProductDetail);
