import { memo } from 'react';
import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const EmployeeForm = () => {
  const { t } = useTranslation('employee');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <FormTextField fullWidth autoFocus required name='title' label={t('fields.title')} />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth required multiline minRows={3} name='description' label={t('fields.description')} />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth multiline minRows={3} name='requirements' label={t('fields.requirements')} />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth multiline minRows={3} name='responsibilities' label={t('fields.responsibilities')} />
      </Grid>
    </Grid>
  );
};

export default memo(EmployeeForm);
