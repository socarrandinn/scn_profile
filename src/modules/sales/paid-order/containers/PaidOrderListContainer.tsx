import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindPaidOrders } from 'modules/sales/paid-order/hooks/useFindPaidOrders';
import { paidOrderColumns } from 'modules/sales/paid-order/constants/paid-order.columns';
import { PaidOrderListToolbar } from 'modules/sales/paid-order/components/PaidOrderListToolbar';

const PaidOrderListContainer = () => {
  const { isLoading, error, data } = useFindPaidOrders();
  return (
    <Box>
      <PaidOrderListToolbar />
      <Table
        columns={paidOrderColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(PaidOrderListContainer);
