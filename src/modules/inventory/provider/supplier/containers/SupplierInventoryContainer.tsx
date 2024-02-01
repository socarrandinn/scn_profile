import { memo } from 'react';
import { Stack } from '@mui/material';
import { SupplierStoreProductTab } from '../components/SupplierStoreProductTab';
import { SupplierInventoryCardContainer } from '../components/SupplierInventoryCardContainer';

const SupplierInventoryContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }} gap={{ xs: 1, md: 2 }}>
      <SupplierInventoryCardContainer />
      <SupplierStoreProductTab />
    </Stack>
  );
};

export default memo(SupplierInventoryContainer);
