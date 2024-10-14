import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { AddAviableProductForm } from 'modules/inventory/product/components/AddAviableForm';
import AddAviableProductFormSkeleton from 'modules/inventory/product/components/AddAviableForm/AddAviableProductFormSkeleton';
import useAddAviableProductStockForm from 'modules/inventory/settings/warehouse-area/hooks/useAddAviableProductStockForm';
import { IStock } from 'modules/inventory/warehouse/interfaces';
import { TitleModal } from './AvailableProductEditModal';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

type AviableProductCreateModalProps = {
  open: boolean;
  productId: string;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStock;
  onClose: () => void;
};
const AvailableProductCreateModal = ({
  title = 'stock.title',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  productId,
}: AviableProductCreateModalProps) => {
  const { t } = useTranslation('product');
  const { product } = useProductDetail();
  const { control, onSubmit, isLoading, reset, error } = useAddAviableProductStockForm(
    productId,
    onClose,
    initValue,
  );
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={<TitleModal name={product?.name || ''} isAdd={true} />}
      aria-labelledby={'warehouseArea-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<AddAviableProductFormSkeleton />}>
            <AddAviableProductForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AvailableProductCreateModal);
