import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormEventHandler, memo } from 'react';
import { ProductDiscountSelect } from '../ProductDiscountSelect';
import { useTranslation } from 'react-i18next';

type ProductDiscountBulkAddFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductDiscountBulkAddForm = ({ error, control, isLoading, onSubmit }: ProductDiscountBulkAddFormProps) => {
  const { t } = useTranslation('productDiscount');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark noValidate>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <ProductDiscountSelect name={'productDiscount'} label={t('offer')} placeholder={t('offer')} required />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ProductDiscountBulkAddForm);
