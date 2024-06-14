import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const GeneralInfoForm = () => {
  const { t } = useTranslation('productDiscount');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormTextField size='medium' fullWidth autoFocus required name='name' label={t('fields.name')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField size='medium' fullWidth name='entity' label={t('fields.entity')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField required name='description' label={t('fields.description')} multiline minRows={3} />
      </Grid>
    </Grid>
  );
};

export default GeneralInfoForm;
