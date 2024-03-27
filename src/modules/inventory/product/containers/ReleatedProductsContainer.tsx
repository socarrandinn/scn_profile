import { memo } from 'react';
import { Stack } from '@mui/material';
import { ReleatedProductsListComponent } from 'modules/inventory/product/components/ReleatedProductsListComponent';

const ReleatedProductsContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <ReleatedProductsListComponent />
    </Stack>
  );
};

export default memo(ReleatedProductsContainer);
