import { memo } from 'react';
import { PaymentAgreementHeaderDetails } from '../components/PaymentAgreementHeaderDetails';
import { PaymentAgreementProvider } from '../contexts/paymentAgreementContext';
import { useParams } from 'react-router';
import { PaymentAgreementContentDetail } from '../components/PaymentAgreementContentDetail';

const PaymentAgreementDetailContainer = () => {
  const { id } = useParams();
  return (
    <PaymentAgreementProvider paymentAgreementId={id as string}>
      <PaymentAgreementHeaderDetails />
      <PaymentAgreementContentDetail />
    </PaymentAgreementProvider>
  );
};

export default memo(PaymentAgreementDetailContainer);
