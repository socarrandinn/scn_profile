import { memo, useMemo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import { FlexBox } from '@dfl/mui-react-common';
import { IOrder } from '../../interfaces/IOrder';
import { useVerifyFraud } from '../../hooks/useVerifyFraud';
import { PAYMENT_GATEWAYS_ENUM, PAYMENT_ICONS } from '../../constants/order-payments';

type OrderPaymentMethodProps = {
  value: string;
  record: IOrder;
};

const OrderPaymentMethod = ({ value, record }: OrderPaymentMethodProps) => {
  const { t } = useTranslation('order');
  const { color, isActive } = useVerifyFraud(value, true);

  const paymentGateway = value;

  const icon = useMemo(() => {
    if (!paymentGateway) return <></>;

    if (PAYMENT_ICONS[paymentGateway]) {
      if (paymentGateway === PAYMENT_GATEWAYS_ENUM.BALANCE_DUC) {
        return <img src={PAYMENT_ICONS[paymentGateway]} width={50} height={18} alt={paymentGateway} />;
      }
      return <img src={PAYMENT_ICONS[paymentGateway]} width={18} height={18} alt={paymentGateway} />;
    }

    return <PaymentOutlinedIcon fontSize={'small'} color={'primary'} />;
  }, [paymentGateway]);

  if (!value) return <Chip label={t('gateway.null')} size={'small'} />;

  if (record?.billing?.mixed) {
    return (
      <Chip
        sx={{
          fontSize: {
            xs: '0.65rem',
            md: '0.8125rem',
          },
        }}
        variant={!isActive ? 'outlined' : 'filled'}
        label={t(`gateway.${paymentGateway || 'null'}`)}
        icon={
          <FlexBox>
            {icon}
            <img
              src={PAYMENT_ICONS.BALANCE_TUAMBIA}
              className={'ml-1'}
              width={18}
              height={18}
              alt={PAYMENT_ICONS.BALANCE_TUAMBIA}
            />
          </FlexBox>
        }
        size={'small'}
        color={color}
      />
    );
  }

  return (
    <Chip
      sx={{
        fontSize: {
          xs: '0.65rem',
          md: '0.8125rem',
        },
      }}
      variant={!isActive ? 'outlined' : 'filled'}
      label={t(`gateway.${paymentGateway || 'null'}`)}
      icon={icon}
      size={'small'}
      color={color}
    />
  );
};

export default memo(OrderPaymentMethod);
