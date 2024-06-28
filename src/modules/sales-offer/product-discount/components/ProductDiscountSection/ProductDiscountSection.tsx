import { FormDatePickerField, FormTextField } from '@dfl/mui-react-common';
import PercentIcon from '@mui/icons-material/Percent';
import { Grid, InputAdornment } from '@mui/material';
import { commonInputProps } from 'modules/common/constants/field.props';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductDiscountSectionLayout } from '../ProductDiscountSectionLayout';
import { ProductDiscountTypeForm } from '../ProductDiscountTypeForm';
import { ProductDiscountValueForm } from '../ProductDiscountValueForm';

type OfferSectionProps = {
  discountType: string;
};

const ProductDiscountSection = ({ discountType }: OfferSectionProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <ProductDiscountSectionLayout>
      <Grid item xs={12}>
        <ProductDiscountTypeForm />
      </Grid>
      <Grid item xs={12} md={4}>
        <ProductDiscountValueForm discountType={discountType} />
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
