import { Stack } from '@mui/material';
import { memo } from 'react';
import { StoreGeneralBasic } from 'modules/inventory/warehouse/components/StoreGeneralBasic';
import { StoreGeneralAddress } from 'modules/inventory/warehouse/components/StoreGeneralAddress';
import { StoreGeneralContact } from 'modules/inventory/warehouse/components/StoreGeneralContact';
import { StoreGeneralProvider } from 'modules/inventory/warehouse/components/StoreGeneralProvider';
import { StoreGeneralLocations } from '../components/StoreGeneralLocations';

const StoreGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <StoreGeneralBasic />
      <StoreGeneralLocations />
      <StoreGeneralProvider />
      <StoreGeneralAddress />
      <StoreGeneralContact />
    </Stack>
  );
};

export default memo(StoreGeneralContainer);
