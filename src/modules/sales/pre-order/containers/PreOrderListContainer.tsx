import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { PreOrderListToolbar } from '../components/PreOrderListToolbar';
import { useFindAllPreOrders } from '../hooks/useFindAllPreOrders';
import { preOrderColumns } from 'modules/sales/common/constants/order-columns';

const PreOrderListContainer = () => {
  const { isLoading, error, data } = useFindAllPreOrders();
  return (
    <Box>
      <TabsFilter translation={'preOrder'} defaultView={'all'} />
      <PreOrderListToolbar />
      <Table
        columns={preOrderColumns}
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
