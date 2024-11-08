import { FormEventHandler, memo } from 'react';
import { Form, FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProductCodeSelect from '../Forms/ProductCodeSelect';
import { WarehouseAreaSelect } from 'modules/inventory/settings/warehouse-area/components/WarehouseAreaSelect';
import ProductOperationSelect from '../Forms/ProductOperationSelect';
import StockHandlerError from '../HandleErrors/StockHandlerError';
import { IWarehouseSupplier } from 'modules/inventory/warehouse/interfaces/IWarehouseSupplier';

type ProductUpdateStockFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: any;
  supplierCommission?: IWarehouseSupplier;
};

const ProductUpdateStockForm = ({ error, control, isLoading, onSubmit, supplierCommission }: ProductUpdateStockFormProps) => {
  const { t } = useTranslation(['stock', 'warehouseArea', 'product']);

  return (
    <>
      <StockHandlerError error={error} initValue={supplierCommission} loadingInitData={isLoading} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-update-stock'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <ProductCodeSelect name='product' label={t('product:selectCode')} />
          </Grid>

          <Grid item xs={12}>
            <WarehouseAreaSelect name='warehouseArea' label={t('warehouseArea:select')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ProductOperationSelect name='operation' label={t('fields.operation')} />
          </Grid>

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
