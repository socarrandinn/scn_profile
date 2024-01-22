import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { FormCurrencyField } from 'components/CurrencyInput';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
// import FormDiscountField from 'modules/inventory/product/components/FormDiscountField/FormDiscountField';

type ProductPriceTabFormFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductPriceTabFormForm = ({ error, control, isLoading, onSubmit }: ProductPriceTabFormFormProps) => {
  const { t } = useTranslation('product');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormCurrencyField
              fullWidth
              required
              defaultValue={0}
              name='priceDetails.values.cost'
              label={t('section.prices.cost')}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormCurrencyField
              fullWidth
              defaultValue={0}
              name='priceDetails.values.logistic'
              label={t('section.prices.logistic')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormCurrencyField fullWidth name='priceDetails.values.shipping' label={t('section.prices.shipping')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormCurrencyField fullWidth name='priceDetails.values.commercial' label={t('section.prices.commercial')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormCurrencyField fullWidth name='priceDetails.values.otherCost' label={t('section.prices.otherCost')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(ProductPriceTabFormForm);
