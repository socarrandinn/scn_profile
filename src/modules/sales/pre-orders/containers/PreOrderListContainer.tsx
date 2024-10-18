import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { paidOrderColumns } from 'modules/sales/paid-order/constants/paid-order.columns';
import { PreOrderListToolbar } from '../components/PreOrderListToolbar';
import { useFindAllPreOrders } from '../hooks/useFindAllPreOrders';

const PreOrderListContainer = () => {
  const { isLoading, error, data } = useFindAllPreOrders();
  return (
    <Box>
      <TabsFilter translation={'pre-order'} defaultView={'all'} />
      <PreOrderListToolbar />
      <Table
        columns={paidOrderColumns}
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

export default memo(PreOrderListContainer);
