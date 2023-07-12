import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PriorityForm = () => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name='fields.name' label={t('fields.name')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name='fields.brand' label={t('fields.brand')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name='fields.code' label={t('fields.code')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name='fields.description' label={t('fields.description')} />
      </Grid>
    </Grid>
  );
};

export default PriorityForm;