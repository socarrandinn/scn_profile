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
  isUpdated?: boolean;
  isDark?: boolean;
  formId?: string;
};

const PaymentAgreementForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  isUpdated = false,
  isDark = true,
  formId = 'payment-agreement-form',
}: PaymentAgreementFormProps) => {
  const { t } = useTranslation('paymentAgreement');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={formId} dark={isDark}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={isUpdated ? 12 : 6} order={-2}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12} md={isUpdated ? 12 : 6} order={isUpdated ? 1 : -1}>
            <FormDatePickerField disablePast required name='sendDate' label={t('fields.sendDate')} />
          </Grid>

          {/* // todo   */}
          <Grid item xs={12}>
            <FormTextField disabled required name='driver' label={t('fields.driver')} />
          </Grid>

          <Grid item xs={12} md={isUpdated ? 6 : 4}>
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

          <Grid item xs={12} md={isUpdated ? 6 : 4}>
            <FormTextField
              type='number'
              name='estimatedShippingCost'
              readOnly
              label={t('fields.estimatedShippingCost')}
              InputProps={{
                startAdornment: <AttachMoneyOutlined fontSize={'small'} />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={isUpdated ? 6 : 4}>
            <FormTextField
              type='number'
              name='maxShippingCost'
              readOnly
              label={t('fields.maxShippingCost')}
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
