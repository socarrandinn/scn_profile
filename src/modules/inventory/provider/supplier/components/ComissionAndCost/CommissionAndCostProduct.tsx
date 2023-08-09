import { Grid } from '@mui/material';
import { FormTextField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SelectStatus from 'modules/inventory/provider/logistics/components/SelectStatus/SelectStatus';

const CommissionAndCostProduct = () => {
  const { t } = useTranslation('logistics');
  return (<Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={12}>
      <FormTextField type='number' fullWidth autoFocus required name='commission' label={t('fields.commission')} inputProps={{
        inputMode: 'numeric',
        step: 0.1
      }} />
    </Grid>
    <Grid item xs={12}>
      <SelectStatus />
    </Grid>
  </Grid>)
}

export default memo(CommissionAndCostProduct)
