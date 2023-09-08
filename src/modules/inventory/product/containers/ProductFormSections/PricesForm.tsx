import { FormTextField } from '@dfl/mui-react-common';
import { Grid, InputAdornment } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { FormTextFieldWithOptions } from 'components/TextFieldWithOptions';
import { useTranslation } from 'react-i18next';

// TODO: Add price type selector (fixed/percent) to the price value fields
const PricesForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormCurrencyField
          fullWidth
          required
          defaultValue={0}
          name='priceDetails.distribution.cost.value'
          label={t('section.prices.cost')}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextFieldWithOptions
          fullWidth
          required
          name='form-text-field-with-options'
          textFieldValue='price'
          optionFieldValue='type'
          value={{ price: 180, type: 'FIXED' }}
          label='Price'
          options={['FIXED', 'PERCENT']}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          type={'number'}
          name='priceDetails.distribution.logistic.value'
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
          type={'number'}
          defaultValue={0}
          name='priceDetails.distribution.shipping.value'
          label={t('section.prices.shipping')}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          type={'number'}
          defaultValue={0}
          name='priceDetails.distribution.commercial.value'
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
          type={'number'}
          name='priceDetails.distribution.otherCost.value'
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
