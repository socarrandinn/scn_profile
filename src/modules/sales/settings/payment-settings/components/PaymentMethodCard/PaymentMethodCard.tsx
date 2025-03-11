import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Card } from '@mui/material';
import PaymentMethodCardHeader from './PaymentMethodCardHeader';
import { PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { IPaymentMethod } from '../../interfaces';
import { ReactComponent as PaypalIcon } from 'assets/icons/paypal.svg';
import { ReactComponent as VisaIcon } from 'assets/icons/visa.svg';
import { ReactComponent as BankTransferIcon } from 'assets/icons/bank-transfer.svg';
import { ReactComponent as TropipayIcon } from 'assets/icons/tropipay.svg';
import { ReactComponent as TuambiaIcon } from 'assets/icons/tuambia.svg';
import { DetailStack } from '@dfl/mui-react-common';
import { PAYMENT_DETAILS_SUMMARY } from '../../constants/payment-details-summary';


type PaymentMethodCardProps = {
  paymentMethod: IPaymentMethod;
  selected: boolean
};

const PaymentMethodCard = ({ selected, paymentMethod, ...props }: PaymentMethodCardProps) => {
  const { t } = useTranslation('order');

  const paymentMethodIconMap = useMemo(() => {
    switch (paymentMethod?.methodType) {
      case PAYMENT_METHOD_ENUM.PAYPAL:
        return <PaypalIcon />;
      case PAYMENT_METHOD_ENUM.TROPIPAY:
        return <TropipayIcon />;
      case PAYMENT_METHOD_ENUM.INTERNAL_WALLET:
        return <TuambiaIcon />;
      case PAYMENT_METHOD_ENUM.CREDIT_CARD:
        return <VisaIcon />;
      default:
        return <BankTransferIcon />;
    }
  }, [paymentMethod?.methodType]);

  return (
    <Card
      sx={{
        padding: '20px',
        boxShadow: selected ? '0px 5px 15px 5px rgba(114, 182, 47, 0.10)' : '0px 5px 15px 5px rgba(0, 0, 0, 0.07)',
        border: selected ? '2px solid rgba(114, 182, 47, 0.50)' : 'none'
      }}>
      <PaymentMethodCardHeader
        icon={paymentMethodIconMap}
        title={t(`payment.method.${paymentMethod?.methodType}`)}
        field={paymentMethod?._id}
      />
      <DetailStack details={PAYMENT_DETAILS_SUMMARY} data={paymentMethod} sx={{ px: 0 }} inverse />
    </Card>
  );
};

export default memo(PaymentMethodCard);
