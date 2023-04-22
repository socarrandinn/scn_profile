import { Grid } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { AddressInput } from 'modules/common/components/Address';

const AddressInfoForm = () => {
  const { t } = useTranslation('employee');

  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <AddressInput name={'address'}/>
            </Grid>
        </Grid>
  );
};

export default AddressInfoForm;
