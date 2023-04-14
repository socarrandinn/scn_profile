import { Grid } from '@mui/material';
import { FormTextField } from '@dfl/mui-react-common';
import { FormPhoneInput } from 'components/libs/PhoneInput';
import { AddressInput } from 'modules/security/users/components/Address';
import { useTranslation } from 'react-i18next';

const ContactForm = ({ state, freeShipping = false }: { state: string; freeShipping?: boolean | undefined }) => {
  const { t } = useTranslation('users');

  return (
    <>
      <Grid item xs={12} md={6}>
        <FormTextField name='firstName' required label={t('common:firstName')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField name='lastName' required label={t('common:lastName')} />
      </Grid>
      <Grid item xs={12}>
        <FormPhoneInput country={'cu'} required name='phone' autoComplete='phone' label={t('common:phone')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField required={freeShipping} name='identityNumber' label={t('shipping.identityNumber')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField required name='email' autoComplete='email' label={t('common:email')} />
      </Grid>
      <Grid item xs={12}>
        <AddressInput state={state} name='address' />
      </Grid>
    </>
  );
};

export default ContactForm;
