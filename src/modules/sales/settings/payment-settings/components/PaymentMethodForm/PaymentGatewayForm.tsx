import { Grid, Typography } from '@mui/material';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { IGatewayConfig } from '../../interfaces';
import { TransferCardForm } from '../TransferCardForm';
import { PAYMENT_GATEWAYS_ENUM } from 'modules/sales/common/constants/order-payments';
import { ReactComponent as StripeIcon } from 'assets/icons/stripe.svg';
import { ReactComponent as ElavonIcon } from 'assets/icons/elavon.svg';
import { ReactComponent as TropipayIcon } from 'assets/icons/tropipay.svg';
import { ReactComponent as RedsysIcon } from 'assets/icons/redsys.svg';
import { ReactComponent as DucappIcon } from 'assets/icons/ducapp0.svg';
import { ReactComponent as BillpocketIcon } from 'assets/icons/billpocket.svg';

export const PAYMENT_GATEWAY_ICON: Record<string, ReactNode> = {
  [PAYMENT_GATEWAYS_ENUM.TROPIPAY]: <TropipayIcon />,
  [PAYMENT_GATEWAYS_ENUM.BILL_POCKET]: <BillpocketIcon />,
  [PAYMENT_GATEWAYS_ENUM.STRIPE]: <StripeIcon />,
  [PAYMENT_GATEWAYS_ENUM.REDSYS]: <RedsysIcon />,
  [PAYMENT_GATEWAYS_ENUM.DUCAPP]: <DucappIcon />,
  [PAYMENT_GATEWAYS_ENUM.ELAVON]: <ElavonIcon />,
};

const PaymentGatewayForm = ({ data }: { data: IGatewayConfig[] }) => {
  const { t } = useTranslation('paymentSettings');

  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ mt: 1 }}>{t('Seleccione las pasarelas de pago que serán aceptadas en la tienda')}</Typography>
      </Grid>
      {data?.map((gateway, index) => (
        <Grid item xs={12} key={gateway?.gateway}>
          <TransferCardForm
            data={gateway}
            name={`gatewayConfig.${index}`}
            icon={PAYMENT_GATEWAY_ICON[gateway?.gateway]}
            multiple
            title={t(`order:payment.gateway.${gateway?.gateway}`)}
          />
        </Grid>
      ))}
    </>
  );
};

export default memo(PaymentGatewayForm);
