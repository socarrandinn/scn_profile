import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { PaidOrderListToolbar } from 'modules/sales/paid-order/components/PaidOrderListToolbar';
import { subOrderColumns } from 'modules/sales/common/constants/order-columns';
import { useFindSubOrders } from '../hooks/useFindSubOrders';

const SubOrderListContainer = () => {
  const { isLoading, error, data } = useFindSubOrders();
  return (
    <Box>
      <TabsFilter translation={'order'} defaultView={'all'} />
      <PaidOrderListToolbar />
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
