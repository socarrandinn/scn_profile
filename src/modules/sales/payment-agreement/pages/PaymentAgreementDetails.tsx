import { memo } from 'react';
import PaymentAgreementDetailContainer from '../containers/PaymentAgreementDetailContainer';
import { PageLayout } from 'layouts/index';

const PaymentAgreementDetails = () => {
  return (
    <PageLayout>
      <PaymentAgreementDetailContainer />
    </PageLayout>
  );
};

export default memo(PaymentAgreementDetails);
