import { Grid } from '@mui/material';
import FormPhoneInputArray from '../../../../common/components/FormContactInput/phone/FormPhoneInputArray';
import FormEmailInputArray from 'modules/common/components/FormContactInput/email/FormEmailInputArray';

const ContactsInfoForm = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <FormPhoneInputArray name={'contacts.phones'} />
      </Grid>
      <Grid item xs={12}>
        <FormEmailInputArray name={'contacts.emails'} />
      </Grid>
    </Grid>
  );
};

export default ContactsInfoForm;
