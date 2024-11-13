import { FormEventHandler, memo, useCallback } from 'react';
import { FlexBox, Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { CircularProgress, Grid, Typography, Alert, AlertTitle, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { useProductStock } from '../../hooks/useProductStock';
import { SelectStore } from 'modules/inventory/provider/supplier/components/SelectStore';
import { StockReductionCauseSelect } from 'modules/inventory/settings/stock-reduction-cause/components/StockReductionCauseSelect';
import ProductOperationSelect from '../Forms/ProductOperationSelect';
import { FileDropZone } from 'components/FileDropZone';
import { TYPE_DROP } from 'components/FileDropZone/FileDropZone';
import { ACCEPT_ONLY_PDF, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';

type UpdateStockFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  isAdd: boolean;
  quantity: any;
  onSubmit: FormEventHandler | undefined;
  productId: string;
  warehouseId: string;
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
  warehouseId,
  setValue,
  onSubmit,
  isDirectory = false,
}: UpdateStockFormProps) => {
  const { t } = useTranslation('product');
  const { data, isLoading: loadingStock } = useProductStock(productId, warehouseId);
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
        <Grid container spacing={{ xs: 1, md: 2 }} alignItems='center'>
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
              <SelectStore name='warehouse' placeholder={t('providerProduct:selectWarehouse')} />
            </Grid>
          )}

          <Grid item xs={12}>
            <Stack flexDirection={'row'} gap={2} alignItems={'start'}>
              <ProductOperationSelect name='operation' required />

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
              <StockReductionCauseSelect required name='cause' label={t('cause.title')} />
            </Grid>
          )}

          <Grid item xs={12}>
            <FileDropZone
              name='file'
              label={t('product:form.invoice.title')}
              dropTitle={t('stock:warehouse.import.fields.uploadFile')}
              type={TYPE_DROP.FILE}
              control={control}
              showDropzoneWrapper
              inputProps={{
                accept: ACCEPT_ONLY_PDF,
                maxFiles: 1,
                maxSize: MAX_SIZE_FILE,
              }}
            />
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
