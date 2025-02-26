import { Grid } from '@mui/material';
import { FormTextField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ManipulationCommission = () => {
  const { t } = useTranslation('logistics');
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <FormTextField
          type='number'
          fullWidth
          required
          name='handlingCost'
          label={t('fields.handlingCost')}
          inputProps={{
            inputMode: 'numeric',
            step: 0.01,
            min: 0,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default memo(ManipulationCommission);
