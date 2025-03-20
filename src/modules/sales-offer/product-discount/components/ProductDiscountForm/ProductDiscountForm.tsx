import { Form, FormLabel, FormSwitchField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductDiscountProductPicker } from '../ProductDiscountProductPicker';
import { ProductDiscountSection } from '../ProductDiscountSection';

type ProductDiscountFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  discountType: string;
};

const ProductDiscountForm = ({ error, control, isLoading, onSubmit, discountType }: ProductDiscountFormProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark noValidate>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={6} md={9}>
            <FormTextField fullWidth required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={4} sm={2} md={3}>
            <FormLabel label={t('fields.enabled')} />
            <FormSwitchField name='enabled' label={t('enabledTypes.ACTIVE')} />
          </Grid>
          <Grid item xs={12}>
            <ProductDiscountSection discountType={discountType} />
          </Grid>
          <Grid item xs={12}>
            <ProductDiscountProductPicker
              name='products'
              label={t('fields.products')}
              placeholder={t('fields.products')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ProductDiscountForm);
