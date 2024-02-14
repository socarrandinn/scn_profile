import { memo } from 'react';
import { Stack } from '@mui/material';
import { SupplierStoreProductTab } from '../components/SupplierStoreProductTab';
import { SupplierInventoryStoreContainer } from '../components/SupplierInventoryCardContainer/SupplierInventoryCardContainerV2';

const SupplierInventoryContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }} gap={{ xs: 1, md: 2 }}>
      <SupplierInventoryStoreContainer />
      <SupplierStoreProductTab />
    </Stack>
  );
};

export default memo(SupplierInventoryContainer);
