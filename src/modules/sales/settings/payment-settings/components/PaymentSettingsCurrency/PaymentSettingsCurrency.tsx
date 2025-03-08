import { FormPaper } from 'modules/common/components/FormPaper';
import { Typography } from '@mui/material';
import { Info } from '@mui/icons-material';
import { InfoIcon } from 'components/icons/InfoIcon';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { Form, HandlerError } from '@dfl/mui-react-common';
import useHomeDeliveryCreateGlobalForm from 'modules/sales/settings/home-delivery/hooks/useHomeDeliveryCreateGlobalForm';
import { PaymentSettingsCurrencyForm } from '../PaymentSettingsCurrencyForm';

const PaymentSettingsCurrency = () => {
  const { t } = useTranslation('paymentSettings');
  const { onSubmit, control, error, isLoading, formState, watch } = useHomeDeliveryCreateGlobalForm();

  return (
    <PagePaperLayout title={t('list')}>
      <Form control={control} onSubmit={onSubmit} isLoading={isLoading} size={'small'} id='home-delivery-global-form' formState={formState} watch={watch}>
        <HandlerError error={error} />
        <PaymentSettingsCurrencyForm />
      </Form>
      <FormPaper sx={{ maxWidth: { xs: undefined, xl: '420px' }, display: 'flex', gap: 2, borderLeft: '8px solid #65BE46', position: 'relative', }}>
        <Info fontSize='small' color='primary' />
        <Typography>{t('description')}</Typography>
        <InfoIcon sx={{ position: 'absolute', bottom: '-4px', right: 0, width: 50, height: 50 }} />
      </FormPaper>
    </PagePaperLayout>
  );
};

export default memo(PaymentSettingsCurrency);
