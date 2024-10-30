import { Grid } from '@mui/material';
import { FormCurrencyField } from 'components/CurrencyInput';
import { useTranslation } from 'react-i18next';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { calculateFinalPrice } from 'modules/inventory/product/utils';
import { ReadOnlyCurrencyField } from 'modules/inventory/product/components/ReadOnlyCurrencyField';
import { useDFLForm } from '@dfl/mui-react-common';

type PriceFormProps = {
  priceDetails?: IProductPriceDetails;
  logisticPriceType?: string;
  shippingPriceType?: string;
  commercialPriceType?: string;
  otherCostPriceType?: string;
  editFinalPrice?: number;
};

// TODO: Add price type selector (fixed/percent) to the price value fields
const PricesForm = ({
  logisticPriceType,
  shippingPriceType,
  commercialPriceType,
  otherCostPriceType,
  editFinalPrice,
  priceDetails,
}: PriceFormProps) => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();

  if (!priceDetails || !priceDetails.distribution) return null;
  const cost = watch?.('priceDetails.distribution.cost.value');
  const finalPrice =
    editFinalPrice !== undefined ? editFinalPrice : calculateFinalPrice(priceDetails.distribution, cost);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormCurrencyField
          fullWidth
          required
          defaultValue={0}
          name='priceDetails.distribution.cost.value'
          label={t('section.prices.cost')}
          size='medium'
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormDiscountField
          initPriceType={logisticPriceType}
          fullWidth
          name='priceDetails.distribution.logistic'
          label={t('section.prices.logistic')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          initPriceType={shippingPriceType}
          fullWidth
          name='priceDetails.distribution.shipping'
          label={t('section.prices.shipping')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          initPriceType={commercialPriceType}
          fullWidth
          name='priceDetails.distribution.commercial'
          label={t('section.prices.commercial')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDiscountField
          initPriceType={otherCostPriceType}
          fullWidth
          name='priceDetails.distribution.otherCost'
          label={t('section.prices.otherCost')}
          size='medium'
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <ReadOnlyCurrencyField
          label={t('section.prices.price')}
          value={finalPrice}
          id='product-final-price'
          size='medium'
        />
      </Grid>
    </Grid>
  );
};

export default PricesForm;
