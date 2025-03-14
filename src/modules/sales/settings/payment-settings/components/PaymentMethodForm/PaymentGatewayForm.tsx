import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GatewayCard } from '../GatewayCard';
import { IGatewayConfig } from '../../interfaces';

const PaymentGatewayForm = ({ data }: { data: IGatewayConfig[] }) => {
  const { t } = useTranslation('paymentSettings');

  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ mt: 1 }}>{t('Seleccione las pasarelas de pago que serán aceptadas en la tienda')}</Typography>
      </Grid>
      {data?.map((gateway, index) => (
        <Grid item xs={12} key={gateway?.gateway}>
          <GatewayCard data={gateway} name={`settings.gatewayConfig.${index}`} />
        </Grid>
      ))}
    </>
  );
};

export default memo(PaymentGatewayForm);
