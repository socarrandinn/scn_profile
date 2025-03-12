import { Grid, Typography } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const PaymentMethodForm = () => {
  const { t } = useTranslation('paymentSettings');

  return (
    <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems={'center'} paddingTop={1}>
      <Grid item xs={12} md={6}>
        <FormCurrencyField
          required
          size='small'
          name='settings.minAmount'
          label={t('fields.minAmount')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormCurrencyField
          required
          size='small'
          name='settings.maxAmount'
          label={t('fields.maxAmount')}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mt: 1 }}>{t('currenciesStoreSelect')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <CurrencySelect name='settings.currency' multiple size='small' />
      </Grid>
    </Grid >
  );
};

export default memo(PaymentMethodForm);
