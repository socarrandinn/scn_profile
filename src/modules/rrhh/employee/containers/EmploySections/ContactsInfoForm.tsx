import { Grid } from '@mui/material';
import FormContactInputArray from '../../../../common/components/FormContactInput/FormContactInputArray';

const ContactsInfoForm = () => {
  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <FormContactInputArray name={'contacts.phones'}/>
            </Grid>
        </Grid>
  );
};

export default ContactsInfoForm;
