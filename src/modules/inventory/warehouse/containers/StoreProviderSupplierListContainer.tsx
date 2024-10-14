import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { useFindSupplierByStore } from 'modules/inventory/warehouse/hooks/useFindSupplierByStore';
import { SupplierListToolbar } from 'modules/inventory/provider/supplier/components/SupplierListToolbar';
import { warehouseSupplierColumns } from 'modules/inventory/provider/supplier/constants';

const StoreProviderSupplierListContainer = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isLoading, error, data } = useFindSupplierByStore(warehouseId);
  return (
    <Box>
      <SupplierListToolbar />
      <Table
        columns={warehouseSupplierColumns}
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
