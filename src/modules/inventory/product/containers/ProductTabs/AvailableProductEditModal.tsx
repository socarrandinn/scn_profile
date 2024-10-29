import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Typography } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IStock } from 'modules/inventory/warehouse/interfaces';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStockByWarehouse } from 'modules/inventory/product/hooks/useFindProductStockByWarehouse';
import useUpdateAvailableProductStockForm from 'modules/inventory/settings/warehouse-area/hooks/useAddAvailableProductStockForm';
import UpdateAvailableProductFormSkeleton from '../../components/UpdateAvailableForm/UpdateAvailableProductFormSkeleton';
import UpdateAvailableProductForm from '../../components/UpdateAvailableForm/UpdateAvailableProductForm';

type AvailableProductEditModalProps = {
  open: boolean;
  productId: string;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStock;
  onClose: () => void;
};

type TitleModalProps = {
  name: string;
  isAdd?: boolean;
};
export const TitleModal = ({ name, isAdd }: TitleModalProps) => {
  const { t } = useTranslation('product');
  return (
    <Typography>
      {isAdd ? t('stock.title') : t('stock.updateStockTitle')}
      <strong>{name}</strong>
    </Typography>
  );
};

const AvailableProductEditModal = ({
  title = 'stock.updateStockTitle',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  productId,
}: AvailableProductEditModalProps) => {
  const { t } = useTranslation('product');
  const { product } = useProductDetail();
  const { control, onSubmit, isLoading, reset, error, setValue, quantity, operation } = useUpdateAvailableProductStockForm(
    productId,
    onClose,
    initValue,
  );
  const { finalQuantity } = quantity;

  const { data: stockData } = useFindProductStockByWarehouse(productId, initValue?.warehouse as string);
  const prevFinalityQuantity = finalQuantity(stockData?.data?.stock) as number;
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={<TitleModal name={product?.name || ''} />}
      aria-labelledby={'warehouseArea-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<UpdateAvailableProductFormSkeleton />}>
            <UpdateAvailableProductForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              productId={productId}
              setValue={setValue}
              warehouse={initValue?.warehouse}
              prevFinalityQuantity={prevFinalityQuantity}
              operation={operation}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError || (prevFinalityQuantity !== undefined && prevFinalityQuantity < 0)}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AvailableProductEditModal);
