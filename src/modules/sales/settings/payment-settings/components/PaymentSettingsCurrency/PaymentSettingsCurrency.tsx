import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { PaymentSettingsCurrencyForm } from '../PaymentSettingsCurrencyForm';
import usePaymentSettingsCreateForm from '../../hooks/usePaymentSettingsCreateForm';
import { FormPaper } from 'modules/common/components/FormPaper';

const PaymentSettingsCurrency = () => {
  const { t } = useTranslation('paymentSettings');
  const { onSubmit, control, error, isLoading, formState, watch } = usePaymentSettingsCreateForm();
  console.log('PaymentSettingsCurrency', watch());

  return (
    <FormPaper
      mbHeader={0}
      title={t('currencySettings')}
      actions={
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading}
          disabled={!!error}
          form='payment-currency-form'
        >
          {t('common:save')}
        </LoadingButton>
      }>
      <Form control={control} onSubmit={onSubmit} isLoading={isLoading} size={'small'} id='payment-currency-form' formState={formState} watch={watch}>
        <HandlerError error={error} />
        <PaymentSettingsCurrencyForm />
      </Form>
    </FormPaper>
  );
};

export default memo(PaymentSettingsCurrency);
