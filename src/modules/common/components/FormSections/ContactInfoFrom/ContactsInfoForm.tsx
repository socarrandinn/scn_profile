import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FormPhoneInputArray from 'modules/common/components/FormContactInput/phone/FormPhoneInputArray';
import FormEmailInputArray from 'modules/common/components/FormContactInput/email/FormEmailInputArray';
import { FormPaper } from 'modules/common/components/FormPaper';

const ContactsInfoForm = (error?: any) => {
  const { t } = useTranslation('common');

  return (
        <FormPaper title={t('contacts')}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <FormPhoneInputArray name={'contacts.phones'} label={t('phones')} required error={error} />
                </Grid>
                <Grid item xs={12}>
                    <FormEmailInputArray name={'contacts.emails'} label={t('emails')} required error={error}/>
                </Grid>
            </Grid>
        </FormPaper>
  );
};

export default ContactsInfoForm;
