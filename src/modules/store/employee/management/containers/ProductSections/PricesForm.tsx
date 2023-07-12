import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { Grid, TextField,InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PricesForm = () => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name="section.prices.costPrice" label={t('section.prices.costPrice')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label={t('section.prices.commissionLogistic')}
          id="section.prices.commissionLogistic"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name="section.prices.commissionShipping" label={t('section.prices.commissionShipping')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name="section.prices.commercialMargin" label={t('section.prices.commercialMargin')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name="section.prices.price" label={t('section.prices.price')} />
      </Grid>
    </Grid>
  );
};

export default PricesForm;