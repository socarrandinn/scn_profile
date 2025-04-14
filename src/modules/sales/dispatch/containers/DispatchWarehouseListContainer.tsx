import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindDispatchWarehouses } from '../hooks/useDispatchTabs';
import { dispatchWarehouseColumn } from '../constants';
import { warehouseColumns } from 'modules/inventory/warehouse/constants';

const DispatchWarehouseListContainer = () => {
  const { isLoading, error, data } = useFindDispatchWarehouses();
  return (
    <Box>
      {/* <DispatchSubOrderListToolbar filters={filters} total={data?.total} search={search as string} /> */}
      <Table
        columns={dispatchWarehouseColumn(
          warehouseColumns?.filter((column) => !(column.field as string)?.match(/actions/)),
        )}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        rowsPerPageOptions={[10, 20, 30, 50]}
        select
      />
    </Box>
  );
};

export default memo(DispatchWarehouseListContainer);
