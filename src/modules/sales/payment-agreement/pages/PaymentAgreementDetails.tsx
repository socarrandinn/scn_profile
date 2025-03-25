import { memo } from 'react';
import { useParams } from 'react-router';
import { PaymentAgreementProvider } from '../contexts/paymentAgreementContext';
import PaymentAgreementDetailContainer from '../containers/PaymentAgreementDetailContainer';

const PaymentAgreementDetails = () => {
  const { id } = useParams();
  return (
    <PaymentAgreementProvider paymentAgreementId={id as string}>
      <PaymentAgreementDetailContainer />
    </PaymentAgreementProvider>
  );
};

export default memo(PaymentAgreementDetails);
