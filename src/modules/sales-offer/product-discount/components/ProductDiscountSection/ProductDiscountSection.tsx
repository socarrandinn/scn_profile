import { FormDatePickerField, FormTextField } from '@dfl/mui-react-common';
import PercentIcon from '@mui/icons-material/Percent';
import { Grid, InputAdornment, Typography } from '@mui/material';
import { commonInputProps } from 'modules/common/constants/field.props';
import { SelectProductRadioComponent } from 'modules/inventory/product/components/SelectProductRadioComponent';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductDiscountSectionLayout } from '../ProductDiscountSectionLayout';
import { OFFER_TYPES } from '../../constants';

type OfferSectionProps = {
  discountType: string;
};

const ProductDiscountSection = ({ discountType: offerType }: OfferSectionProps) => {
  const { t } = useTranslation('productDiscount');
  const isPercentType = useMemo(() => offerType === 'PERCENTAGE', [offerType]);

  return (
    <ProductDiscountSectionLayout>
      <Grid item xs={12}>
        <Typography>{t('fields.discountType')}</Typography>
        <SelectProductRadioComponent name={'discountType'} options={OFFER_TYPES} flexDirection='row' />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormTextField
          type='number'
          name='discount'
          label={t('fields.discount')}
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
      <Grid item xs={12} md={4}>
        <FormDatePickerField disablePast name='startDate' label={t('fields.startDate')} />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormDatePickerField disablePast name='endDate' label={t('fields.endDate')} />
      </Grid>
    </ProductDiscountSectionLayout>
  );
};

export default memo(ProductDiscountSection);
