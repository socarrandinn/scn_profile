import { Form, FormDatePickerField, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductDiscountTypeForm } from '../ProductDiscountTypeForm';
import { ProductDiscountValueForm } from '../ProductDiscountValueForm';

type ProductDiscountHeaderFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  offerDiscount: number;
  discountType: string;
};

const ProductDiscountHeaderForm = ({ error, control, isLoading, onSubmit, discountType }: ProductDiscountHeaderFormProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        size={'small'}
        id={'form-update-product-offers'}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={6} md={10} >
            <FormTextField name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={4} sm={2} md={2}>
            <FormSwitchField name='enabled' label={t('enabledTypes.ACTIVE')} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductDiscountTypeForm hideLabel />
          </Grid>
          <Grid item xs={12} md={2}>
            <ProductDiscountValueForm discountType={discountType} />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormDatePickerField disablePast name='startDate' label={t('fields.startDate')} />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormDatePickerField disablePast name='endDate' label={t('fields.endDate')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ProductDiscountHeaderForm);
