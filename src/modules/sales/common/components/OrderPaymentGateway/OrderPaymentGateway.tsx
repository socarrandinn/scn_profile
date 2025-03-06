import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PAYMENT_GATEWAYS_ENUM } from '../../constants/order-payments';

type OrderPaymentMethodProps = {
  value: PAYMENT_GATEWAYS_ENUM;
};

const OrderPaymentGateway = ({ value }: OrderPaymentMethodProps) => {
  const { t } = useTranslation('order');

  const exist = Object.values(PAYMENT_GATEWAYS_ENUM)?.some((p) => p === value);

  if (exist) {
    return <Chip label={t(`payment.gateway.${value}`)} size={'small'} color='warning' />;
  }

  return <>{value}</>;
};

export default memo(OrderPaymentGateway);
