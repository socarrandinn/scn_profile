import { FormTextField, Small, FormRadioGroupField, FormCheckBoxField, FormDatePickerField } from '@dfl/mui-react-common';
import { Grid, Stack, FormControlLabel, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductOfferForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormCheckBoxField name={'offer.enabled'} label={'Producto en oferta'}/>
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.offer.offerType')}</Small>
        <Stack spacing={2} alignItems={'start'} justifyContent={'start'}>
          <FormRadioGroupField name={'offer.discountType'}>
            <FormControlLabel value='Fijo' control={<Radio />} label={'Fijo'} />
            <FormControlLabel value='Porcentual' control={<Radio />} label={'Porcentual'} />
          </FormRadioGroupField>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={2} direction='column'>
          <FormTextField fullWidth required defaultValue={0} name='offer.discount' label={t('section.offer.title')} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormDatePickerField
          name='offer.from'
          label={t('section.offer.availableFrom')}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
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
