import { Grid } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { useTranslation } from 'react-i18next';
import FormDiscountField from '../../components/FormDiscountField/FormDiscountField';

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
        <FormDiscountField
          fullWidth
          name='priceDetails.distribution.logistic.value'
          label={t('section.prices.logistic')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          fullWidth
          name='priceDetails.distribution.shipping.value'
          label={t('section.prices.shipping')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          fullWidth
          name='priceDetails.distribution.commercial.value'
          label={t('section.prices.commercial')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          fullWidth
          name='priceDetails.distribution.otherCost.value'
          label={t('section.prices.otherCost')}
        />
      </Grid>
    </Grid>
  );
};

export default PricesForm;
