import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindOrderStatuses } from 'modules/sales/settings/order-status/hooks/useFindOrderStatuses';
import { orderStatusColumns } from 'modules/sales/settings/order-status/constants/order-status.columns';
import { OrderStatusListToolbar } from 'modules/sales/settings/order-status/components/OrderStatusListToolbar';
import OrderStatusEditModal from 'modules/sales/settings/order-status/containers/OrderStatusEditModal';
import { IOrderStatus } from '../interfaces';

const OrderStatusListContainer = () => {
  const { isLoading, error, data } = useFindOrderStatuses();
  return (
    <Box>
      <OrderStatusListToolbar />
      <Table
        columns={orderStatusColumns}
        data={data?.data?.sort((a: IOrderStatus, b: IOrderStatus) => a.order - b.order)}
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
