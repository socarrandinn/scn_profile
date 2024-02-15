import { FormEventHandler, memo, useCallback } from 'react';
import { FlexBox, Form, FormSelectField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { CircularProgress, Grid, MenuItem, Typography, Alert, AlertTitle, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { map } from 'lodash';
import { useToggle } from '@dfl/hook-utils';
import { ProductFileSection } from '../ProductFileSection';
import { useProductStock } from '../../hooks/useProductStock';
import { PRODUCT_STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { SelectStore } from 'modules/inventory/provider/supplier/components/SelectStore';
import { StockCauseSelect } from 'modules/inventory/common/components/StockCauseSelect';

type UpdateStockFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  isAdd: boolean;
  quantity: any;
  onSubmit: FormEventHandler | undefined;
  productId: string;
  storeId: string;
  setValue: any;
  isDirectory?: boolean;
};

type StockAmountProps = {
  loading?: boolean;
  label?: string;
  display?: any;
  amount: number;
};

export const StockAmount = ({ label, loading, amount, ...props }: StockAmountProps) => {
  const { t } = useTranslation('product');

  return (
    <FlexBox gap={1} alignItems='center' {...props}>
      <Typography variant='body1' fontWeight='bold'>
        {label || `${t('stock.stock')}:`}
      </Typography>
      <>{loading ? <CircularProgress value={100} size={12} thickness={5} /> : amount}</>
    </FlexBox>
  );
};

const UpdateStockForm = ({
  isAdd,
  error,
  control,
  isLoading,
  quantity,
  productId,
  storeId,
  setValue,
  onSubmit,
  isDirectory = false,
}: UpdateStockFormProps) => {
  const { t } = useTranslation('product');
  const { data, isLoading: loadingStock } = useProductStock(productId, storeId);
  const { finalQuantity } = quantity;
  const { isOpen, onClose } = useToggle(true);

  const handleOnSubmit = useCallback(
    (event: any) => {
      event?.preventDefault();
      event?.stopPropagation();
      onSubmit?.(event);
    },
    [onSubmit],
  );

  return (
    <>
      <HandlerError error={error} />
      <Form onSubmit={handleOnSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='center'>
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
          {isDirectory && (
            <Grid item xs={12} mb={1}>
              <SelectStore name='store' placeholder={t('providerProduct:selectStore')} />
            </Grid>
          )}

          <Grid item xs={12}>
            <Stack flexDirection={'row'} gap={2} alignItems={'start'}>
              <FormSelectField
                name='operation'
                required
                // eslint-disable-next-line react/no-children-prop
                children={map(PRODUCT_STOCK_OPERATIONS, (value: string, key: string) => (
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
                  max: !isAdd ? data?.data?.stock : null,
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  min: 0,
                }}
                helperText={t('units_plural')}
              />
            </Stack>
          </Grid>

          {!isAdd && (
            <Grid item xs={12}>
              <StockCauseSelect
                name='cause'
                label={t('product:cause:title')}
                placeholder={t('product:cause.title')}
                required
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <ProductFileSection name='file' setValue={setValue} isImportButton={false} />
          </Grid>
          <Grid item xs={12} mt={1}>
            <FormTextField name='note' type='text' multiline minRows={3} label={`${t('description')} (${t('note')})`} />
          </Grid>
          {!isDirectory && (
            <Grid item xs={12}>
              <FlexBox gap={1} alignItems='center' justifyContent='flex-end'>
                <StockAmount amount={finalQuantity(data?.data?.stock)} loading={loadingStock} />
              </FlexBox>
            </Grid>
          )}
        </Grid>
      </Form>
    </>
  );
};

export default memo(UpdateStockForm);
