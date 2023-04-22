import { Grid } from '@mui/material';
import FormPhoneInputArray from '../../../../common/components/FormContactInput/phone/FormPhoneInputArray';
import FormEmailInputArray from 'modules/common/components/FormContactInput/email/FormEmailInputArray';
import { FormLabel } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

const ContactsInfoForm = () => {
  const { t } = useTranslation('employee');

  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <FormLabel label={t('fields.contacts.phones')} required>
                    <FormPhoneInputArray name={'contacts.phones'}/>
                </FormLabel>
            </Grid>
            <Grid item xs={12}>
                <FormLabel label={t('fields.contacts.emails')} required>
                    <FormEmailInputArray name={'contacts.emails'}/>
                </FormLabel>
            </Grid>
        </Grid>
  );
};

export default ContactsInfoForm;
