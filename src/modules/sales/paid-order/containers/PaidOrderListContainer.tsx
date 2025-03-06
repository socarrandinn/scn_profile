import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindPaidOrders } from 'modules/sales/paid-order/hooks/useFindPaidOrders';
import { PaidOrderListToolbar } from 'modules/sales/paid-order/components/PaidOrderListToolbar';
import { paidOrderColumns } from 'modules/sales/common/constants/order-columns';

const PaidOrderListContainer = () => {
  const { isLoading, error, data, filters } = useFindPaidOrders();

  return (
    <Box>
      <PaidOrderListToolbar filters={filters} />
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

export default memo(PaidOrderListContainer);
