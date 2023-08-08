import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormSwitchField } from '@dfl/mui-react-common';

const VisibilityForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormSwitchField name='visibility' label={t('fields.visibility')} />
      </Grid>
    </Grid>
  );
};

export default VisibilityForm;
