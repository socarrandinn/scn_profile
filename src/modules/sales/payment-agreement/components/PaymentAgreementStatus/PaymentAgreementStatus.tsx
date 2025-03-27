import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PAYMENT_AGREEMENT_STATUS } from '../../constants/payment-agreement.enum';

type Props = { value: string };

const PaymentAgreementStatus = ({ value }: Props) => {
  const { t } = useTranslation('paymentAgreement');

  if (!value) return <>-</>;

  return (
    <Chip
      variant='filled'
      label={t(`status.${value}`)}
      size={'medium'}
      color={PAYMENT_AGREEMENT_STATUS[value]}
      sx={{ p: '6px 16px', height: 36.46, fontSize: 14 }}
    />
  );
};

export default memo(PaymentAgreementStatus);
