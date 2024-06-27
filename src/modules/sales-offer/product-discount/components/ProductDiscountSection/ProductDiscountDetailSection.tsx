import { FormDatePickerField, FormTextField } from '@dfl/mui-react-common';
import PercentIcon from '@mui/icons-material/Percent';
import { Grid, InputAdornment, Typography } from '@mui/material';
import { commonInputProps } from 'modules/common/constants/field.props';
import { SelectProductRadioComponent } from 'modules/inventory/product/components/SelectProductRadioComponent';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { OFFER_TYPES } from '../../constants';

type ProductDiscountDetailSectionProps = {
  discountType: string;
};

const ProductDiscountDetailSection = ({ discountType: offerType }: ProductDiscountDetailSectionProps) => {
  const { t } = useTranslation('productDiscount');
  const isPercentType = useMemo(() => offerType === 'PERCENTAGE', [offerType]);

  return (
    <Grid container spacing={{ xs: 2 }}>
      <Grid xs={12} pl={{ xs: 1, md: 2 }} pt={0}>
        <Typography>{t('discountType')}</Typography>
        <SelectProductRadioComponent name={'discountType'} options={OFFER_TYPES} flexDirection='row' />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          type='number'
          name='discount'
          label={t('offer')}
          inputProps={{
            ...commonInputProps,
            min: 0,
            max: !isPercentType && 100,
            step: isPercentType ? 0.1 : 0.01,
          }}
          InputProps={
            isPercentType
              ? {
                endAdornment: (
                  <InputAdornment position='start'>
                    <PercentIcon />
                  </InputAdornment>
                ),
              }
              : {}
          }
        />
      </Grid>
      <Grid item xs={12}>
        <FormDatePickerField disablePast name='startDate' label={t('fields.startDate')} />
      </Grid>
      <Grid item xs={12}>
        <FormDatePickerField disablePast name='endDate' label={t('fields.endDate')} />
      </Grid>
    </Grid>
  );
};

export default memo(ProductDiscountDetailSection);
