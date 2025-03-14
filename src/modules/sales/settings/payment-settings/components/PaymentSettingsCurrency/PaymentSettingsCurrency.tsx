import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { CurrencySettingsForm } from '../CurrencySettingsForm';
import { GeneralActions } from 'layouts/portals';
import useCurrencySettingsCreateForm from '../../hooks/useCurrencySettingsCreateForm';
import { usePaymentSettings } from '../../contexts/PaymentSettingsDetail';
import { CURRENCY_RATE_MODE, CURRENCY_TYPE_ENUM } from '../../constants';
import { ICurrencySettings } from '../../interfaces';

const PaymentSettingsCurrency = () => {
  const { t } = useTranslation('paymentSettings');
  const { settings, isLoading: loading } = usePaymentSettings();

  const currencyData = useMemo(() => {
    const safeSettings = settings || {
      primary: CURRENCY_TYPE_ENUM.USD, // Valor inicial apropiado
      currencies: [],
    };

    return {
      primary: safeSettings?.primary || CURRENCY_TYPE_ENUM.USD,
      currencies: safeSettings?.currencies.map((currency) => ({
        ...currency,
        isCustomRate:
          currency?.isCustomRate === true
            ? CURRENCY_RATE_MODE.MANUAL
            : CURRENCY_RATE_MODE.AUTOMATIC,
      })) || [],
    }
  }, [settings]);

  const { onSubmit, control, error, isLoading, formState, watch, setValue } = useCurrencySettingsCreateForm(currencyData as ICurrencySettings);

  return (
    <PagePaperLayout title={t('currencySettings')}>
      <GeneralActions>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading}
          disabled={loading || !formState?.isDirty}
          form='payment-currency-form'
        >
          {t('common:save')}
        </LoadingButton>
      </GeneralActions>
      <Form
        control={control}
        onSubmit={onSubmit}
        isLoading={isLoading}
        size={'small'}
        disabled={loading}
        setValue={setValue}
        id='payment-currency-form'
        formState={formState}
        watch={watch}
      >
        <HandlerError error={error} />
        <CurrencySettingsForm setValue={setValue} />
      </Form>
    </PagePaperLayout>
  );
};

export default memo(PaymentSettingsCurrency);
