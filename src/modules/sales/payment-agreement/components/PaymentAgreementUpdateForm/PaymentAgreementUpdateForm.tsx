import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PaymentAgreementSelect } from '../PaymentAgreementSelect';

type DispatchFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  disabled: boolean;
  setValue: any;
  onSubmit: FormEventHandler | undefined;
};

const PaymentAgreementUpdateForm = ({ error, control, isLoading, onSubmit, disabled, setValue }: DispatchFormProps) => {
  const { t } = useTranslation('paymentAgreement');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'payment-agreement-update-form'}
        dark
        disabled={disabled}
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <PaymentAgreementSelect required name='paymentAgreement' label={t('dispatch:list')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(PaymentAgreementUpdateForm);
