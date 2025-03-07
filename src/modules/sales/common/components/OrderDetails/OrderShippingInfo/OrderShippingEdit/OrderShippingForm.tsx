import { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormPhoneInput } from 'components/libs/PhoneInput';
import AddressMapContent from 'modules/common/components/FormSections/AddressInfoFrom/AddressMapContent';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

type OrderShippingFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: any;
};

const OrderShippingForm = ({ error, control, isLoading, onSubmit, setValue }: OrderShippingFormProps) => {
  const { t } = useTranslation('order');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        setValue={setValue}
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
          <Grid item xs={12} md={6}>
            <FormPhoneInput
              required
              fullWidth
              name='person.phone'
              label={t('common:phone')}
              placeholder='+5355555555'
            />
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
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              autoFocus
              required
              name='person.email'
              label={t('common:email')}
              placeholder={t('common:email')}
            />
          </Grid>
          <Grid item xs={12} mb={2}>
            <AddressMapContent control={control} name={'address'} disabledLocation countryCode={ADDRESS_COUNTRY_CODE} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              multiline
              minRows={3}
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
