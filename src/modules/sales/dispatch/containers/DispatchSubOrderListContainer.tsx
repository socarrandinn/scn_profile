import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { subOrderColumns } from 'modules/sales/common/constants/order-columns';
import { DispatchSubOrderListToolbar } from '../components/DispatchSubOrderListToolbar';
import { dispatchSubOrderColumn } from '../constants';
import { useFindDispatchSubOrders } from '../hooks/useDispatchTabs';

const DispatchSubOrderListContainer = () => {
  const { isLoading, error, data, filters, search } = useFindDispatchSubOrders();
  return (
    <Box>
      <DispatchSubOrderListToolbar filters={filters} total={data?.total} search={search as string} />
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
