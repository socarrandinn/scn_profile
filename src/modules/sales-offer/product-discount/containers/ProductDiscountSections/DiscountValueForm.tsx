import { FormDateTimePickerField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';
import { useTranslation } from 'react-i18next';

type DiscountValueFormProps = {
  priceType?: string;
};

const DiscountValueForm = ({ priceType }: DiscountValueFormProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormDiscountField
          initPriceType={priceType}
          fullWidth
          required
          name='offer'
          label={t('fields.value')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormDateTimePickerField
          fullWidth
          required
          name='from'
          label={t('fields.from')}
          size='medium'
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <FormDateTimePickerField
          fullWidth
          required
          name='to'
          label={t('fields.to')}
          size='medium'
        />
      </Grid>
    </Grid>
  );
};

export default DiscountValueForm;
