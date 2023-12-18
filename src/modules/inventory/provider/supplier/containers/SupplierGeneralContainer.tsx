import { Stack } from '@mui/material';
import { memo } from 'react';
import { SupplierGeneralAddress } from '../components/SupplierGeneralAddress';
import { SupplierGeneralContact } from '../components/SupplierGeneralContact';

const SupplierGeneralContainer = () => {
  return (
    <Stack gap={{ xs: 2, md: 3 }} mb={{ xs: 2, md: 4 }}>
      <SupplierGeneralAddress />
      <SupplierGeneralContact />
    </Stack>
  );
};

export default memo(SupplierGeneralContainer);
