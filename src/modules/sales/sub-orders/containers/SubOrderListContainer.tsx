import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { subOrderColumns } from 'modules/sales/common/constants/order-columns';
import { useFindSubOrders } from '../hooks/useFindSubOrders';
import SubOrderListToolbar from '../components/SubOrderListToolbar/SubOrderListToolbar';

const SubOrderListContainer = () => {
  const { isLoading, error, data, filters, search } = useFindSubOrders();
  return (
    <Box>
      <TabsFilter translation={'order'} defaultView={'all'} />
      <SubOrderListToolbar filters={filters} total={data?.total} search={search as string} />
      <Table
        columns={subOrderColumns}
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

export default memo(SubOrderListContainer);
