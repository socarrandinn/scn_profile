import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const EstimatedTimeForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          type='number'
          defaultValue={0}
          name='estimateTime.minTime'
          label={t('section.deliveryTime.labelMin')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          type='number'
          defaultValue={0}
          name='estimateTime.maxTime'
          label={t('section.deliveryTime.labelMax')}
        />
      </Grid>
    </Grid>
  );
};

export default EstimatedTimeForm;
