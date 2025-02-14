import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IStock } from 'modules/inventory/warehouse/interfaces';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import useUpdateAvailableProductStockForm from 'modules/inventory/settings/warehouse-area/hooks/useAddAvailableProductStockForm';
import { TransTypography } from 'components/TransTypography';
import UpdateAvailableProductFormSkeleton from 'modules/inventory/product/components/UpdateAvailableForm/UpdateAvailableProductFormSkeleton';
import { UpdateAvailableProductForm } from 'modules/inventory/product/components/UpdateAvailableForm';

type AvailableProductEditModalProps = {
  open: boolean;
  productId: string;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStock;
  onClose: () => void;
  stock: number;
};

const AvailableProductEditModal = ({
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  productId,
  stock,
}: AvailableProductEditModalProps) => {
  const { t } = useTranslation('product');
  const { product } = useProductDetail();
  const { control, onSubmit, isLoading, reset, error, setValue, quantity, operation } =
    useUpdateAvailableProductStockForm(productId, onClose, initValue);
  const { finalQuantity } = quantity;

  const prevFinalityQuantity = finalQuantity(stock) as number;
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={<TransTypography message={'product:stock.updateStockTitle'} values={{ name: product?.name }} />}
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
              stock={stock}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
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
