import { Stack } from '@mui/material';
import { memo } from 'react';
import { SupplierGeneralAddress } from '../components/SupplierGeneralAddress';

const SupplierGeneralContainer = () => {
  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <SupplierGeneralAddress />
    </Stack>
  );
};

export default memo(SupplierGeneralContainer);
