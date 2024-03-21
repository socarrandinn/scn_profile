import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectRelatedProducts } from 'modules/inventory/product/components/SelectRelatedProducts';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { FormEventHandler } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';

type RelatedProductsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const RelatedProductsForm = ({ error, control, isLoading, onSubmit }: RelatedProductsFormProps) => {
  const { t } = useTranslation('product');
  const { id } = useProductDetail();
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={12}>
            <SelectRelatedProducts
              label={t('section.relatedProducts.relatedProductsField')}
              name='related'
              placeholder={t('section.relatedProducts.placeholder')}
              id={id}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default RelatedProductsForm;
