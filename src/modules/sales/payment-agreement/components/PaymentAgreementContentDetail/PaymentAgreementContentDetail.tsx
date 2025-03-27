import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { Stack } from '@mui/material';
import { memo } from 'react';
import PaymentAgreementSubOrders from '../PaymentAgreementSubOrders/PaymentAgreementSubOrders';
import PaymentAgreementEditContainer from '../../containers/section/PaymentAgreementEditContainer';

const PaymentAgreementContentDetail = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <DetailLayout>
        <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
          <PaymentAgreementEditContainer />
        </DetailSummary>
        <DetailContent ghost>
          <PaymentAgreementSubOrders />
        </DetailContent>
      </DetailLayout>
    </Stack>
  );
};

export default memo(PaymentAgreementContentDetail);
