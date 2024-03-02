import {
  FormTextField,
  Small,
  FormRadioGroupField,
  FormCheckBoxField,
  FormDatePickerField,
  FlexBox,
} from '@dfl/mui-react-common';
import { Grid, Stack, FormControlLabel, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { commonInputProps } from 'modules/common/constants/field.props';

const OfferTypeRadioGroup = ({ labelPercentage, labelFixed }: { labelPercentage: string; labelFixed: string }) => (
  <FormRadioGroupField name={'offer.discountType'}>
    <FlexBox flexDirection={'row'} gap={1} alignItems={'center'}>
      <FormControlLabel value='Fijo' control={<Radio />} label={labelFixed} />
      <FormControlLabel value='Porcentual' control={<Radio />} label={labelPercentage} />
    </FlexBox>
  </FormRadioGroupField>
);

const DiscountField = ({ label, name }: { label: string; name: string }) => (
  <Stack spacing={2} direction='column'>
    <FormTextField
      fullWidth
      type='number'
      required
      defaultValue={0}
      name={name}
      label={label}
      inputProps={{
        ...commonInputProps,
        min: 1,
        step: 0.01,
      }}
    />
  </Stack>
);

const DateFields = ({ labelFrom, labelTo }: { labelFrom: string; labelTo: string }) => (
  <>
    <Grid item xs={12} md={4}>
      <FormDatePickerField name='offer.from' label={labelFrom} required fullWidth />
    </Grid>
    <Grid item xs={12} md={4}>
      <FormDatePickerField name='offer.to' label={labelTo} required fullWidth />
    </Grid>
  </>
);

const ProductOfferForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormCheckBoxField name={'offer.enabled'} label={t('section.offer.placeholder')} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.offer.offerType')}</Small>
        <Stack spacing={2} alignItems={'start'} justifyContent={'start'}>
          <OfferTypeRadioGroup
            labelPercentage={t('section.offer.OfferTypeRadioPercentage')}
            labelFixed={t('section.offer.OfferTypeRadioFixed')}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <DiscountField label={t('section.offer.title')} name='offer.discount' />
      </Grid>
      <DateFields labelFrom={t('section.offer.availableFrom')} labelTo={t('section.offer.availableUntil')} />
    </Grid>
  );
};

export default ProductOfferForm;
