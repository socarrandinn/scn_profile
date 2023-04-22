import { Grid } from '@mui/material';
import { AddressInput } from 'modules/common/components/Address';

const AddressInfoForm = () => {
  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <AddressInput name={'address'} required />
            </Grid>
        </Grid>
  );
};

export default AddressInfoForm;
