import { FormEventHandler, memo, useCallback } from 'react';
import { FlexBox, Form, FormSelectField, FormTextField, HandlerError, useDFLForm } from '@dfl/mui-react-common';
import { Alert, AlertTitle, CircularProgress, Grid, MenuItem, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PRODUCT_STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { map } from 'lodash';
import { useToggle } from '@dfl/hook-utils';
// import { useFindProductStock } from '../../hooks/useFindProductStock';
import { useFindProductStockByStore } from '../../hooks/useFindProductStockByStore';

type StoreAreaFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  initValues?: any;
  productId?: string;
  store?: string;
};

type StockAmountProps = {
  loading?: boolean;
  display?: any;
  amount: number;
};

export const StockAmount = ({ loading, amount, ...props }: StockAmountProps) => {
  const { t } = useTranslation('product');

  return (
    <FlexBox gap={1} alignItems='center' {...props}>
      <Typography variant='body1' fontWeight='bold'>
        {t('stock.stock')}
      </Typography>
      <>{loading ? <CircularProgress value={100} size={12} thickness={5} /> : amount}</>
    </FlexBox>
  );
};

const UpdateAviableProductForm = ({ error, control, isLoading, onSubmit, productId, store }: StoreAreaFormProps) => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();
  const { data, isLoading: loadingStock } = useFindProductStockByStore(productId as string, store as string);
  const { isOpen, onClose } = useToggle(true);
  const operationQuantity = watch?.('quantity');
  const operation = watch?.('operation');

  const finalQuantity = useCallback(
    (currentStock: number) => {
      switch (operation) {
        case PRODUCT_STOCK_OPERATIONS.ADDED:
          return currentStock + Number(operationQuantity);
        case PRODUCT_STOCK_OPERATIONS.DISCOUNTED:
          return Number(operationQuantity) >= currentStock ? 0 : currentStock - Number(operationQuantity);
        default:
          break;
      }
    },
    [operation, operationQuantity],
  );

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
                  min: 0,
                }}
                helperText={t('stock.units_plural')}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <FormTextField name='note' type='text' label={t('fields.description')} fullWidth multiline minRows={3} />
          </Grid>
          <Grid item xs={12}>
            <FlexBox gap={1} alignItems='center' justifyContent='flex-end'>
              <StockAmount amount={finalQuantity(data?.data?.stock) as number} loading={loadingStock} />
            </FlexBox>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(UpdateAviableProductForm);
