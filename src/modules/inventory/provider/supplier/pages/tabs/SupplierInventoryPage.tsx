import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { SupplierStoreProductTab } from '../../components/SupplierStoreProductTab';
import { Stack } from '@mui/material';

const SupplierInventoryPage = () => {
  return (
    <PageLayout>
      <Stack mb={{ xs: 2, md: 4 }} gap={{ xs: 1, md: 2 }}>
        <SupplierStoreProductTab />
      </Stack>
    </PageLayout>
  );
};

export default memo(SupplierInventoryPage);
