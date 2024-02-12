import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const EstimatedTimeForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormTextField
          name='shippingSettings.estimatedTime.from'
          type='number'
          label={t('section.deliveryTime.labelMinMinutes')}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name='shippingSettings.estimatedTime.to'
          type='number'
          label={t('section.deliveryTime.labelMaxMinutes')}
          required
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default EstimatedTimeForm;
