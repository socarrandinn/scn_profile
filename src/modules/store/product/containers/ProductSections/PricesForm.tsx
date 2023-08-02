import { FormTextField } from '@dfl/mui-react-common';
import { Grid, InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PricesForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          required
          defaultValue={0}
          name='priceMedatada.costPrice'
          label={t('section.prices.costPrice')}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          name='priceMedatada.providers'
          label={t('section.prices.commissionLogistic')}
          defaultValue={0}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          defaultValue={0}
          name='priceMedatada.plataform'
          label={t('section.prices.commissionShipping')}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          defaultValue={0}
          name='priceMedatada.commercial'
          label={t('section.prices.commercialMargin')}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          defaultValue={0}
          name='priceMedatada.price'
          label={t('section.prices.price')}
        />
      </Grid>
    </Grid>
  );
};

export default PricesForm;
