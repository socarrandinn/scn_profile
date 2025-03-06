import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { PaidOrderListToolbar } from 'modules/sales/paid-order/components/PaidOrderListToolbar';
import { paidOrderColumns } from 'modules/sales/common/constants/order-columns';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import { useFindClientOrders } from 'modules/crm/clients/hooks/useFindClientOrders';

const ClientOrderListContainer = () => {
  const { clientId } = useClientDetails();
  const { isLoading, error, data } = useFindClientOrders(clientId as string);
  return (
    <Box>
      <PaidOrderListToolbar filters={{}} />
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

export default memo(ClientOrderListContainer);
