import { FormDatePickerField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { memo } from 'react';
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
        <FormDatePickerField disablePast name='fromDate' label={t('fields.fromDate')} required/>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormDatePickerField disablePast name='toDate' label={t('fields.toDate')} required/>
      </Grid>
    </ProductDiscountSectionLayout>
  );
};

export default memo(ProductDiscountSection);
