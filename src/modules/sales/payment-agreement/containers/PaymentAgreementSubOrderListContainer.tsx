import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { subOrderColumns } from 'modules/sales/common/constants/order-columns';
import { useFindPaymentAgreementSubOrders } from '../hooks/useFindPaymentAgreementSubOrders';
import { PaymentAgreementSubOrderListToolbar } from '../components/PaymentAgreementSubOrderListToolbar';

const PaymentAgreementSubOrderListContainer = () => {
  const { isLoading, error, data } = useFindPaymentAgreementSubOrders();
  return (
    <Box>
      <TabsFilter translation={'order'} defaultView={'all'} />
      <PaymentAgreementSubOrderListToolbar />
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

export default memo(PaymentAgreementSubOrderListContainer);
