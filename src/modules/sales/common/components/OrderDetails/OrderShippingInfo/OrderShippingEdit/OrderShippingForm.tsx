import { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormPhoneInput } from 'components/libs/PhoneInput';
import { AddressInput } from 'modules/common/components/Address';

type OrderShippingFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const OrderShippingForm = ({ error, control, isLoading, onSubmit }: OrderShippingFormProps) => {
  const { t } = useTranslation('order');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'order-shipping-validation-form'}
        dark
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormTextField
              required
              fullWidth
              autoFocus
              name='person.firstName'
              label={t('common:firstName')}
              placeholder={t('common:firstName')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField
              required
              fullWidth
              autoFocus
              name='person.lastName'
              label={t('common:lastName')}
              placeholder={t('common:lastName')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormPhoneInput required fullWidth name='person.phone' label={t('common:phone')} placeholder='+5355555555' />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField
              fullWidth
              autoFocus
              name='person.identityNumber'
              label={t('common:idNumber')}
              placeholder={t('common:idNumber')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField
              fullWidth
              autoFocus
              required
              name='person.email'
              label={t('common:email')}
              placeholder={t('common:email')}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressInput name={'address'} disabledState />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              multiline
              minRows={2}
              name='note'
              label={t('common:shippingNote.title')}
              placeholder={t('common:shippingNote.placeholder')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(OrderShippingForm);
