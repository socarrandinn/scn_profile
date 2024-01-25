import { Grid } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { useTranslation } from 'react-i18next';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { calculateFinalPrice } from 'modules/inventory/product/utils';
import { ReadOnlyCurrencyField } from 'modules/inventory/product/components/ReadOnlyCurrencyField';

type PriceFormProps = {
  priceDetails?: IProductPriceDetails;
};

// TODO: Add price type selector (fixed/percent) to the price value fields
const PricesForm = ({ priceDetails }: PriceFormProps) => {
  const { t } = useTranslation('product');

  if (!priceDetails || !priceDetails.distribution) return null;

  const finalPrice = calculateFinalPrice(priceDetails.distribution);

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
        <FormDiscountField fullWidth name='priceDetails.distribution.logistic' label={t('section.prices.logistic')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField fullWidth name='priceDetails.distribution.shipping' label={t('section.prices.shipping')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          fullWidth
          name='priceDetails.distribution.commercial'
          label={t('section.prices.commercial')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField fullWidth name='priceDetails.distribution.otherCost' label={t('section.prices.otherCost')} />
      </Grid>

      <Grid item xs={12} md={6}>
        <ReadOnlyCurrencyField label={t('section.prices.price')} value={finalPrice} id='product-final-price' />
      </Grid>
    </Grid>
  );
};

export default PricesForm;
