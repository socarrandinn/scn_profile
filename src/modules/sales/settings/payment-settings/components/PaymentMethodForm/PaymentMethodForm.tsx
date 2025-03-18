import { Grid, Typography } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PaymentGatewayForm from './PaymentGatewayForm';
import { IPaymentSettings } from '../../interfaces';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';

type Props = {
  data?: IPaymentSettings;
  initTaxType: PRICE_TYPE;
};

const PaymentMethodForm = ({ data, initTaxType }: Props) => {
  const { t } = useTranslation('paymentSettings');

  const form = useMemo(
    () =>
      data?.gatewayConfig?.length && data?.gatewayConfig?.length > 0 ? (
        <PaymentGatewayForm data={data?.gatewayConfig} />
      ) : (
        <>
          <Grid item xs={12}>
            <Typography>{t('currenciesStoreSelect')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <CurrencySelect name='currency' multiple size='small' />
          </Grid>
        </>
      ),
    [data?.gatewayConfig?.length],
  );

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems={'flex-start'}
      paddingTop={1}
    >
      <Grid item xs={12} md={6}>
        <FormCurrencyField required size='small' name='minAmount' label={t('fields.minAmount')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormCurrencyField required size='small' name='maxAmount' label={t('fields.maxAmount')} />
      </Grid>
      <Grid item xs={12}>
        <FormDiscountField
          initPriceType={initTaxType}
          fullWidth
          required
          name='tax'
          label={t('common:fields.taxes')}
          size='small'
        />
      </Grid>
      {form}
    </Grid>
  );
};

export default memo(PaymentMethodForm);
