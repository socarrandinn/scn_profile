import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindOrderStatuses } from 'modules/order-status/hooks/useFindOrderStatuses';
import { orderStatusColumns } from 'modules/order-status/constants/order-status.columns';
import { OrderStatusListToolbar } from 'modules/order-status/components/OrderStatusListToolbar';
import OrderStatusEditModal from 'modules/order-status/containers/OrderStatusEditModal';

const OrderStatusListContainer = () => {
  const { isLoading, error, data } = useFindOrderStatuses();
  console.log(data);
  return (
    <Box>
      <OrderStatusListToolbar />
      <Table
        columns={orderStatusColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <OrderStatusEditModal />
    </Box>
  );
};

export default memo(OrderStatusListContainer);
