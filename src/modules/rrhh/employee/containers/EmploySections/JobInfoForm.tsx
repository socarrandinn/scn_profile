import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

const JobInfoForm = () => {
  const { t } = useTranslation('employee');

  return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
                <FormTextField fullWidth autoFocus required name='general.firstName'
                               label={t('fields.general.firsName')}/>
            </Grid>
            <Grid item xs={12}>
                <FormTextField fullWidth autoFocus required name='general.firstName'
                               label={t('fields.general.firsName')}/>
            </Grid>
        </Grid>
  );
};

export default JobInfoForm;
