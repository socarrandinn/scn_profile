import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import { useFindSupplierByStore } from 'modules/inventory/store/hooks/useFindSupplierByStore';
import { ProductsListToolbar } from 'modules/inventory/provider/supplier/components/SupplierListToolbar';
import { storeSupplierColumns } from 'modules/inventory/provider/supplier/constants';

const StoreProviderSupplierListContainer = () => {
  const { storeId } = useStoreDetail();
  const { isLoading, error, data } = useFindSupplierByStore(storeId);
  return (
    <Box>
      <ProductsListToolbar />
      <Table
        columns={storeSupplierColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(StoreProviderSupplierListContainer);
