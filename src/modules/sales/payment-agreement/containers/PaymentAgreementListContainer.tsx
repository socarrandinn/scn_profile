import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindPaymentAgreements } from 'modules/sales/payment-agreement/hooks/useFindPaymentAgreements';
import { paymentAgreementColumns } from 'modules/sales/payment-agreement/constants/payment-agreement.columns';
import { PaymentAgreementListToolbar } from 'modules/sales/payment-agreement/components/PaymentAgreementListToolbar';
import PaymentAgreementEditModal from 'modules/sales/payment-agreement/containers/PaymentAgreementEditModal';

const PaymentAgreementListContainer = () => {
  const { isLoading, error, data } = useFindPaymentAgreements();
  return (
    <Box>
      <PaymentAgreementListToolbar />
      <Table
        columns={paymentAgreementColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <PaymentAgreementEditModal />
    </Box>
  );
};

export default memo(PaymentAgreementListContainer);
