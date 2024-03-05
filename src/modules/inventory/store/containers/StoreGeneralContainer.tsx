import { Stack } from '@mui/material';
import { memo } from 'react';
import { StoreGeneralBasic } from 'modules/inventory/store/components/StoreGeneralBasic';
import { StoreGeneralAddress } from 'modules/inventory/store/components/StoreGeneralAddress';
import { StoreGeneralContact } from 'modules/inventory/store/components/StoreGeneralContact';
import { StoreGeneralLocations } from 'modules/inventory/store/components/StoreGeneralLocations';
import { StoreGeneralProvider } from 'modules/inventory/store/components/StoreGeneralProvider';

const StoreGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <StoreGeneralLocations />
      <StoreGeneralBasic />
      <StoreGeneralProvider />
      <StoreGeneralAddress />
      <StoreGeneralContact />
    </Stack>
  );
};

export default memo(StoreGeneralContainer);
