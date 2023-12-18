import { Stack } from '@mui/material';
import { memo } from 'react';
import { SupplierGeneralAddress } from '../components/SupplierGeneralAddress';
import { SupplierGeneralContact } from '../components/SupplierGeneralContact';
import { SupplierGeneralBasic } from '../components/SupplierGeneralBasic';

const SupplierGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <SupplierGeneralBasic />
      <SupplierGeneralAddress />
      <SupplierGeneralContact />
    </Stack>
  );
};

export default memo(SupplierGeneralContainer);
