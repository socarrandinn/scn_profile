import { Stack } from '@mui/material';
import { memo } from 'react';
import { StoreGeneralBasic } from '../components/StoreGeneralBasic';
import { StoreGeneralAddress } from '../components/StoreGeneralAddres';
import { StoreGeneralContact } from '../components/StoreGeneralContact';
import { StoreCubanMap } from '../components/StoreCubanMap';

const StoreGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }} marginTop={{ xs: 1, md: 1 }}>
      <StoreCubanMap />
      <StoreGeneralBasic />
      <StoreGeneralAddress />
      <StoreGeneralContact />
    </Stack>
  );
};

export default memo(StoreGeneralContainer);
