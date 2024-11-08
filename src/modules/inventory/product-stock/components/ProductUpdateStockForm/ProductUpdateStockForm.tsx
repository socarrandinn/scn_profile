import { FormEventHandler, memo } from 'react';
import { Form, FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProductCodeSelect from '../Forms/ProductCodeSelect';
import { WarehouseAreaSelect } from 'modules/inventory/settings/warehouse-area/components/WarehouseAreaSelect';

type ProductUpdateStockFormProps = {
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductUpdateStockForm = ({ isLoading, onSubmit, control }: ProductUpdateStockFormProps) => {
  const { t } = useTranslation(['stock', 'warehouseArea', 'product']);

  return (
    <>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-update-stock'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <ProductCodeSelect name='product' label={t('product:selectCode')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <WarehouseAreaSelect name='warehouseArea' label={t('warehouseArea:select')} />
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <ProductOperationSelect name='operation' label={t('fields.operation')} />
          </Grid> */}

          <Grid item xs={12} md={6}>
            <FormTextField
              name='quantity'
              type='number'
              label={t('fields.stock')}
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
                min: 0,
              }}
            />
          </Grid>

          <Grid item xs={12} mt={1}>
            <FormTextField
              name='note'
              type='text'
              multiline
              minRows={3}
              label={t('fields.note')}
              placeholder={t('fields.details')}
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default memo(ProductUpdateStockForm);
