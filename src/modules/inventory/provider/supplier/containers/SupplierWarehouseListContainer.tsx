import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { supplierWarehouseColumns } from 'modules/inventory/warehouse/constants/warehouse.columns';
import { StoreListToolbar } from 'modules/inventory/warehouse/components/StoreListToolbar';
import { useFindWarehousesBySupplier } from '../hooks/useFindWarehousesBySupplier';
import { useParams } from 'react-router';

const SupplierWarehouseListContainer = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFindWarehousesBySupplier(id as string);

  return (
    <Box>
      <StoreListToolbar filters={undefined} total={undefined} />
      <Table
        columns={supplierWarehouseColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(SupplierWarehouseListContainer);
