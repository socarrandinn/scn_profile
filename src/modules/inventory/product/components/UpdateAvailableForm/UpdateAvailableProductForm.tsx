import { FormEventHandler, memo, useEffect } from 'react';
import { FlexBox, Form, FormSelectField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Alert, AlertTitle, CircularProgress, Grid, MenuItem, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import { map } from 'lodash';
import { useToggle } from '@dfl/hook-utils';
import { useFindProductStockByWarehouse } from 'modules/inventory/product/hooks/useFindProductStockByWarehouse';
import { StockReductionCauseSelect } from 'modules/inventory/settings/stock-reduction-cause/components/StockReductionCauseSelect';

type WarehouseAreaFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  initValues?: any;
  setValue?: any;
  productId?: string;
  warehouse?: string;
  prevFinalityQuantity?: number;
  operation: PRODUCT_STOCK_OPERATIONS;
};

type StockAmountProps = {
  loading?: boolean;
  display?: any;
  amount: number;
  isTotal?: boolean;
};

export const StockAmount = ({ loading, amount, isTotal, ...props }: StockAmountProps) => {
  const { t } = useTranslation('product');

  return (
    <FlexBox gap={1} alignItems='center' {...props}>
      <Typography variant='body1' fontWeight='bold'>
        {isTotal ? t('stock.totalStock') : t('stock.stock')}
      </Typography>
      <>{loading ? <CircularProgress value={100} size={12} thickness={5} /> : amount}</>
    </FlexBox>
  );
};

const UpdateAvailableProductForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  productId,
  warehouse,
  setValue,
  prevFinalityQuantity,
  operation,
}: WarehouseAreaFormProps) => {
  const { t } = useTranslation('product');
  const { data, isLoading: loadingStock } = useFindProductStockByWarehouse(productId as string, warehouse as string);
  const { isOpen, onClose } = useToggle(true);
  useEffect(() => {
    if (operation === PRODUCT_STOCK_OPERATIONS.DISCOUNTED) {
      setValue('cause', null);
    }
  }, [operation, setValue]);

  let prevAmount = 0;
  (prevFinalityQuantity as number) < 0 ? (prevAmount = 0) : (prevAmount = prevFinalityQuantity as number);

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {isOpen ? (
            <Grid item xs={12} mb={2}>
              <Alert security='info' onClose={onClose}>
                <AlertTitle>{t('info')}</AlertTitle>
                {t('updateStockDescription')}
              </Alert>
            </Grid>
          ) : undefined}
          <Grid item xs={12}>
            <StockAmount loading={loadingStock} amount={data?.data?.stock} />
          </Grid>
          {(prevFinalityQuantity as number) < 0 && (
            <Grid item xs={12}>
              <Typography color={'red'}> {t('warehouseStockModal.error.quantityLessThanZero')}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Stack flexDirection={'row'} gap={2} alignItems={'start'}>
              <FormSelectField
                name='operation'
                required
                placeholder={t('cause.title')}
                // eslint-disable-next-line react/no-children-prop
                children={map(PRODUCT_STOCK_OPERATIONS, (value: string, key: any) => (
                  <MenuItem key={key} value={value}>
                    <>{t(`stock.${value}`)}</>
                  </MenuItem>
                ))}
              />
              <Typography variant='body1' mt={1}>
                {t('in')}
              </Typography>
              <FormTextField
                name='quantity'
                type='number'
                inputProps={{
                  // max: !isAdd ? data?.data?.stock : null,
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  min: 1,
                }}
                helperText={t('stock.units_plural')}
              />
            </Stack>
          </Grid>
          {operation === PRODUCT_STOCK_OPERATIONS.DISCOUNTED ? (
            <Grid item xs={12}>
              <StockReductionCauseSelect required name='cause' label={t('cause.title')} />
              {/*  <SelectDecreaseCauseType required name='cause' label={t('cause.title')} /> */}
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <FormTextField name='note' type='text' label={t('fields.description')} fullWidth multiline minRows={3} />
          </Grid>
          <Grid item xs={12}>
            <FlexBox gap={1} alignItems='center' justifyContent='flex-end'>
              <StockAmount isTotal amount={prevAmount} loading={loadingStock} />
            </FlexBox>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(UpdateAvailableProductForm);
