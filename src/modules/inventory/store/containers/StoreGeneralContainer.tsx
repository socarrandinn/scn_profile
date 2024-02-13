import { Stack } from '@mui/material';
import { memo } from 'react';
import { StoreGeneralBasic } from '../components/StoreGeneralBasic';
import { StoreGeneralAddress } from '../components/StoreGeneralAddress';
import { StoreGeneralContact } from '../components/StoreGeneralContact';
import { StoreGeneralLocations } from '../components/StoreGeneralLocations';

const StoreGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <StoreGeneralLocations />
      <StoreGeneralBasic />
      <StoreGeneralAddress />
      <StoreGeneralContact />
    </Stack>
  );
};

export default memo(StoreGeneralContainer);
