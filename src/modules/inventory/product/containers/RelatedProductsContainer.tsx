import { memo } from 'react';
import { Stack } from '@mui/material';
import { RelatedProductsListComponent } from '../components/RelatedProductsListComponent';

const RelatedProductsContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <RelatedProductsListComponent />
    </Stack>
  );
};

export default memo(RelatedProductsContainer);
