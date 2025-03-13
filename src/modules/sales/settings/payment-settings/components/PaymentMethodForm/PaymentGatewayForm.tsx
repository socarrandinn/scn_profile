import { Card, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GatewayCard } from '../GatewayCard';
import { IGatewayConfig } from '../../interfaces';
import { useDFLForm } from '@dfl/mui-react-common';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';

const PaymentGatewayForm = ({ data }: { data: IGatewayConfig[] }) => {
  const { t } = useTranslation('paymentSettings');
  const { watch } = useDFLForm();
  console.log('watch', watch?.('gatewayConfig'))

  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ mt: 1 }}>{t('Seleccione las pasarelas de pago que serán aceptadas en la tienda')}</Typography>
      </Grid>
      {data?.map((gateway, index) => (
        <Grid item xs={12} key={gateway?.gateway}>
          <GatewayCard data={gateway} name={`settings.gatewayConfig.${index}`} index={index} />
        </Grid>
      ))}
    </>
  );
};

export default memo(PaymentGatewayForm);
