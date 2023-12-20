import { memo } from 'react';
import { Stack } from '@mui/material';
import { SupplierStoreProductTab } from '../components/SupplierStoreProductTab';
import { StoresProvider } from 'modules/inventory/store/context/StoresContext';
import { SupplierInventoryCardContainer } from '../components/SupplierInventoryCardContainer';

const SupplierInventoryContainer = () => {
  return (
    <StoresProvider>
      <Stack mb={{ xs: 2, md: 4 }}>
        <SupplierInventoryCardContainer />
        <SupplierStoreProductTab />
      </Stack>
    </StoresProvider>
  );
};

export default memo(SupplierInventoryContainer);
