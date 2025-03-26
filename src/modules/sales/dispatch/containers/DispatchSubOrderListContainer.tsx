import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { subOrderColumns } from 'modules/sales/common/constants/order-columns';
import { useFindDispatchSubOrders } from 'modules/sales/sub-orders/hooks/useFindSubOrders';
import { DispatchSubOrderListToolbar } from '../components/DispatchSubOrderListToolbar';
import { dispatchSubOrderColumn } from '../constants';

const DispatchSubOrderListContainer = () => {
  const { isLoading, error, data } = useFindDispatchSubOrders();
  return (
    <Box>
      <TabsFilter translation={'order'} defaultView={'all'} />
      <DispatchSubOrderListToolbar />
      <Table
        columns={dispatchSubOrderColumn(subOrderColumns)}
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

export default memo(DispatchSubOrderListContainer);
