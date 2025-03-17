import { Grid, Typography } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PaymentGatewayForm from './PaymentGatewayForm';
import { IPaymentMethod } from '../../interfaces';

type Props = {
  data?: IPaymentMethod;
};

const PaymentMethodForm = ({ data }: Props) => {
  const { t } = useTranslation('paymentSettings');

  const form = useMemo(
    () =>
      data?.settings?.gatewayConfig?.length && data?.settings?.gatewayConfig?.length > 0 ? (
        <PaymentGatewayForm data={data?.settings?.gatewayConfig} />
      ) : (
        <>
          <Grid item xs={12}>
            <Typography>{t('currenciesStoreSelect')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <CurrencySelect name='settings.currency' multiple size='small' />
          </Grid>
        </>
      ),
    [data?.settings?.gatewayConfig?.length],
  );

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 1.5 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems={'flex-start'}
      paddingTop={1}
    >
      <Grid item xs={12} md={6}>
        <FormCurrencyField required size='small' name='settings.minAmount' label={t('fields.minAmount')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormCurrencyField required size='small' name='settings.maxAmount' label={t('fields.maxAmount')} />
      </Grid>
      {form}
    </Grid>
  );
};

export default memo(PaymentMethodForm);
