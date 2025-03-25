import { memo } from 'react';
import { Stack } from '@mui/material';
import PaymentAgreementSubOrders from '../components/PaymentAgreementSubOrders/PaymentAgreementSubOrders';

const PaymentAgreementDetailContainer = () => {
  return (
    <Stack>
      {/*  <DispatchHeader /> */}
      <PaymentAgreementSubOrders />
    </Stack>
  );
};

export default memo(PaymentAgreementDetailContainer);
