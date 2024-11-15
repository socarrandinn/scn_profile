import { memo } from 'react';
import { Stack } from '@mui/material';
import { SupplierStoreProductTab } from '../components/SupplierStoreProductTab';
import { PageLayout } from 'layouts/index';

const SupplierInventoryContainer = () => {
  return (
    <PageLayout>
      <Stack mb={{ xs: 2, md: 4 }} gap={{ xs: 1, md: 2 }}>
        {/* <SupplierInventoryStoreContainer /> */}
        <SupplierStoreProductTab />
      </Stack>
    </PageLayout>
  );
};

export default memo(SupplierInventoryContainer);
