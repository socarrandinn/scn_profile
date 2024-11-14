import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { useFindWarehouseSupplier } from 'modules/inventory/warehouse/hooks/useFindWarehouseSupplier';
import { warehouseSupplierColumns } from '../constants/warehouse-supplier.columns';
import { WarehouseSupplierListToolbar } from '../components/WarehouseSupplierListToolbar';

const StoreProviderSupplierListContainer = () => {
  const { warehouseId } = useWarehouseDetail();
  const { isLoading, error, data } = useFindWarehouseSupplier(warehouseId);
  return (
    <Box>
      <WarehouseSupplierListToolbar />
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
