import { FormEventHandler, memo, useMemo } from 'react';
import { Form, FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProductCodeSelect from '../Forms/ProductCodeSelect';
import { WarehouseAreaSelect } from 'modules/inventory/settings/warehouse-area/components/WarehouseAreaSelect';
import ProductOperationSelect from '../Forms/ProductOperationSelect';
import { useWatch } from 'react-hook-form';
import { STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { StockReductionCauseSelect } from 'modules/inventory/settings/stock-reduction-cause/components/StockReductionCauseSelect';

type ProductUpdateStockFormProps = {
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  onlyAdd?: boolean;
};

const ProductUpdateStockForm = ({ isLoading, onSubmit, onlyAdd, control }: ProductUpdateStockFormProps) => {
  const { t } = useTranslation(['stock', 'warehouseArea', 'product']);
  const { operation } = useWatch({ control });
  const isAdd = useMemo(() => operation === STOCK_OPERATIONS.ADDED, [operation]);

  return (
    <>
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-update-stock'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12}>
            <ProductCodeSelect name='item' label={t('product:selectCode')} placeholder={t('product:selectCode')} />
          </Grid>

          <Grid item xs={12} {...(onlyAdd && { md: 6 })}>
            <WarehouseAreaSelect name='warehouseArea' label={t('warehouseArea:select')} />
          </Grid>
          {!onlyAdd && (
            <Grid item xs={12} md={6}>
              <ProductOperationSelect name='operation' label={t('fields.operation')} />
            </Grid>
          )}

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

          {!isAdd && (
            <Grid item xs={12}>
              <StockReductionCauseSelect required name='cause' label={t('product:cause.title')} />
            </Grid>
          )}

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
