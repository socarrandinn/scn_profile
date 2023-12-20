import { memo } from 'react';
import { Stack } from '@mui/material';
import { useFindStores } from 'modules/inventory/store/hooks/useFindStores';
import { SupplierStoreProductTab } from '../components/SupplierStoreProductTab';
import { SupplierInventoryCardList } from '../components/SupplierInventoryCardList';

const SupplierInventoryContainer = () => {
  const { data: stores, isLoading } = useFindStores();

  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <SupplierInventoryCardList stores={stores?.data} />
      <SupplierStoreProductTab stores={stores?.data} isLoading={isLoading} />
    </Stack>
  );
};

export default memo(SupplierInventoryContainer);
