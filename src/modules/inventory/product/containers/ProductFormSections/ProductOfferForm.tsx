import {
  FormTextField,
  Small,
  FormRadioGroupField,
  FormCheckBoxField,
  FormDatePickerField,
  FlexBox,
  useDFLForm,
} from '@dfl/mui-react-common';
import { Grid, Stack, FormControlLabel, Radio, InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { commonInputProps } from 'modules/common/constants/field.props';

const OfferTypeRadioGroup = ({ labelPercentage, labelFixed }: { labelPercentage: string; labelFixed: string }) => (
  <FormRadioGroupField name={'offer.discountType'}>
    <FlexBox flexDirection={'row'} gap={1} alignItems={'center'}>
      <FormControlLabel value='FIXED' control={<Radio />} label={labelFixed} />
      <FormControlLabel value='PERCENTAGE' control={<Radio />} label={labelPercentage} />
    </FlexBox>
  </FormRadioGroupField>
);

const DiscountField = ({ label, name, startAdornment }: { label: string; name: string; startAdornment: string }) => (
  <Stack spacing={2} direction='column'>
    <FormTextField
      fullWidth
      type='number'
      required
      defaultValue={0}
      name={name}
      label={label}
      InputProps={{
        startAdornment: startAdornment ? <InputAdornment position='start'>{startAdornment}</InputAdornment> : null,
      }}
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
  const { watch } = useDFLForm();

  const offerType = watch?.('offer.discountType');
  const startAdornment = offerType === 'PERCENTAGE' ? '%' : '';
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
        <DiscountField label={t('section.offer.title')} name='offer.discount' startAdornment={startAdornment} />
      </Grid>
      <DateFields labelFrom={t('section.offer.availableFrom')} labelTo={t('section.offer.availableUntil')} />
    </Grid>
  );
};

export default ProductOfferForm;
