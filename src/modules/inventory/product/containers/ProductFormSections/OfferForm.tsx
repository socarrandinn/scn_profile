import { FormTextField, Small, FormRadioGroupField, FormDatePickerField, useDFLForm } from '@dfl/mui-react-common';
import { Grid, Stack, FormControlLabel, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FormCheckbox from 'modules/inventory/common/components/FormCheckbox/FormCheckbox';

const OfferForm = () => {
  const { t } = useTranslation('product');
  const { control } = useDFLForm();

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormCheckbox name={'offer.enabled'} label={'Producto en oferta'} control={control} />
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
      <Grid item xs={12} md={12}>
        <Stack spacing={2} direction='column'>
          <FormTextField fullWidth required defaultValue={0} name='offer.discount' label={t('section.offer.title')} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OfferForm;
