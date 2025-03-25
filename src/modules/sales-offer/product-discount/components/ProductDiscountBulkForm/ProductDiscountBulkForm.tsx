import { Form, FormLabel, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormEventHandler, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductDiscountSection } from '../ProductDiscountSection';
import { FormCustomSwitchField } from 'modules/common/components/IphoneSwitchField';

type ProductDiscountBulkFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  offerDiscount: number;
  discountType: string;
};

const ProductDiscountBulkForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  discountType,
}: ProductDiscountBulkFormProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark noValidate>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={8}>
            <FormTextField fullWidth required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={4}>
            <FormLabel label={t('fields.enabled')} />
            <FormCustomSwitchField name='enabled' label={t('enabledTypes.ACTIVE')} />
          </Grid>
          <Grid item xs={12}>
            <ProductDiscountSection discountType={discountType} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ProductDiscountBulkForm);
