import { FormEventHandler, memo, useMemo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProductCodeSelect from '../Forms/ProductCodeSelect';
import { WarehouseAreaSelect } from 'modules/inventory/settings/warehouse-area/components/WarehouseAreaSelect';
import { useWatch } from 'react-hook-form';
import { STOCK_OPERATIONS } from 'modules/inventory/product-stock/constants/stock-operations.constants';
import ProductOperationSelect from '../Forms/ProductOperationSelect';

type ProductUpdateStockFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue: any;
};

const ProductUpdateStockForm = ({ error, control, isLoading, onSubmit }: ProductUpdateStockFormProps) => {
  const { t } = useTranslation('stock');
  const { operation } = useWatch({ control });
  const isAdd = useMemo(() => operation === STOCK_OPERATIONS, [operation]);

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='center'>
          <Grid item xs={12}>
            <ProductCodeSelect name='code' />
          </Grid>

          <Grid item xs={12}>
            <WarehouseAreaSelect name='warehouseArea' />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductOperationSelect name='operation' />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductOperationSelect name='operation' />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack flexDirection={'row'} gap={2} alignItems={'start'}>
              <Typography variant='body1' mt={1}>
                {t('in')}
              </Typography>
              <FormTextField
                name='quantity'
                type='number'
                inputProps={{
                  // max: // todo
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  min: 0,
                }}
                helperText={t('units_plural')}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} mt={1}>
            <FormTextField
              name='description'
              type='text'
              multiline
              minRows={3}
              label={`${t('description')} (${t('note')})`}
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default memo(ProductUpdateStockForm);
