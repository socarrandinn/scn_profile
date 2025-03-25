import { FormEventHandler, memo } from 'react';
import { Form, FormDatePickerField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AttachMoneyOutlined } from '@mui/icons-material';

type PaymentAgreementFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const PaymentAgreementForm = ({ error, control, isLoading, onSubmit }: PaymentAgreementFormProps) => {
  const { t } = useTranslation('paymentAgreement');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormDatePickerField disablePast required name='sendDate' label={t('fields.sendDate')} />
          </Grid>

          {/* // todo   */}
          <Grid item xs={12}>
            <FormTextField disabled required name='driver' label={t('fields.driver')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormTextField
              type='number'
              required
              name='shippingCost'
              label={t('fields.shippingCost')}
              InputProps={{
                startAdornment: <AttachMoneyOutlined fontSize={'small'} />,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormTextField
              type='number'
              name='estimatedShippingCost'
              label={t('fields.estimatedShippingCost')}
              InputProps={{
                startAdornment: <AttachMoneyOutlined fontSize={'small'} />,
              }}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(PaymentAgreementForm);
