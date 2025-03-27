import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';

import { useDeletePaymentAgreement } from '../../hooks/useDeletePaymentAgreement';
import { usePaymentAgreementDetail } from '../../contexts/paymentAgreementContext';

const PaymentAgreementDetailActions = () => {
  const { paymentAgreement } = usePaymentAgreementDetail();
  const { mutate, isLoading } = useDeletePaymentAgreement(paymentAgreement?._id as string, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(PaymentAgreementDetailActions);
