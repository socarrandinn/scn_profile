import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useStoreDetail } from 'modules/inventory/warehouse/context/StoreContext';
import { useFindSupplierByStore } from 'modules/inventory/warehouse/hooks/useFindSupplierByStore';
import { SupplierListToolbar } from 'modules/inventory/provider/supplier/components/SupplierListToolbar';
import { storeSupplierColumns } from 'modules/inventory/provider/supplier/constants';

const StoreProviderSupplierListContainer = () => {
  const { warehouseId } = useStoreDetail();
  const { isLoading, error, data } = useFindSupplierByStore(warehouseId);
  return (
    <Box>
      <SupplierListToolbar />
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
