import { FormTextField } from '@dfl/mui-react-common';
import { Grid, InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PricesForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth required defaultValue={0} name='priceMeta.cost' label={t('section.prices.cost')} />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='priceMeta.logistic'
          label={t('section.prices.logistic')}
          defaultValue={0}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          defaultValue={0}
          name='priceMeta.shipping'
          label={t('section.prices.shipping')}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          defaultValue={0}
          name='priceMeta.commercial'
          label={t('section.prices.commercial')}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          defaultValue={0}
          name='priceMeta.otherCost'
          label={t('section.prices.otherCost')}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PricesForm;
