import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const GeneralInfoForm = () => {
  const { t } = useTranslation('employee');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name='general.firstName' label={t('fields.general.firsName')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name='general.lastName' label={t('fields.general.lastName')} />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth autoFocus required name='general.ci' label={t('fields.general.ci')} />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth autoFocus required name='general.gender' label={t('fields.general.gender')} />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          fullWidth
          autoFocus
          required
          name='general.civilStatus'
          label={t('fields.general.civilStatus')}
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth autoFocus required name='general.partner' label={t('fields.general.partner')} />
      </Grid>

      <Grid item xs={12}>
        <FormTextField fullWidth multiline minRows={3} name='general.notes' label={t('fields.general.notes')} />
      </Grid>
    </Grid>
  );
};

export default GeneralInfoForm;
