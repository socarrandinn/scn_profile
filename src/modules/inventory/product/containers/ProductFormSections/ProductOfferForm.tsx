import { FormDatePickerField, FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductOfferForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField
          name='offer.type'
          label={t('section.offer.offerType')}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name='offer.offer'
          label={t('section.offer.title')}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDatePickerField
          name='offer.from'
          label={t('section.offer.availableFrom')}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormDatePickerField
          name='offer.to'
          label={t('section.offer.availableUntil')}
          required
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default ProductOfferForm;
