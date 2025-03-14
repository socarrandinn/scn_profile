import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PAYMENT_METHOD_ENUM } from '../../constants/order-payments';
import { Chip } from '@mui/material';
import { MonetizationOnOutlined } from '@mui/icons-material';

type OrderPaymentMethodProps = {
  value: PAYMENT_METHOD_ENUM;
};

const OrderPaymentMethod = ({ value }: OrderPaymentMethodProps) => {
  const { t } = useTranslation('order');
  const exist = Object.values(PAYMENT_METHOD_ENUM)?.some((p) => p === value);

  if (exist) {
    return (
      <Chip
        icon={<MonetizationOnOutlined />}
        variant='outlined'
        sx={{ borderRadius: 1 }}
        label={t(`payment.method.${value}`)}
        size={'small'}
        color='primary'
      />
    );
  }

  return <>{value}</>;
};

export default memo(OrderPaymentMethod);
