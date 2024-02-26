import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent, Typography } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { UpdateAviableProductForm } from 'modules/inventory/product/components/UpdateAviableForm';
import UpdateAviableProductFormSkeleton from 'modules/inventory/product/components/UpdateAviableForm/UpdateAviableProductFormSkeleton';
import useUpdateAviableProductStockForm from 'modules/inventory/settings/store-area/hooks/useUpdateAviableProductStockForm';
import { IStock } from 'modules/inventory/store/interfaces';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStockByStore } from 'modules/inventory/product/hooks/useFindProductStockByStore';

type AviableProductEditModalProps = {
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

const AviableProductEditModal = ({
  title = 'stock.updateStockTitle',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  productId,
}: AviableProductEditModalProps) => {
  const { t } = useTranslation('product');
  const { product } = useProductDetail();
  const { control, onSubmit, isLoading, reset, error, setValue, quantity, operation } = useUpdateAviableProductStockForm(
    productId,
    onClose,
    initValue,
  );
  const { finalQuantity } = quantity;

  const { data: stockData } = useFindProductStockByStore(productId, initValue?.store as string);
  const prevFinalyQuantyti = finalQuantity(stockData?.data?.stock) as number;
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      // @ts-ignore
      title={<TitleModal name={product?.name || ''} />}
      aria-labelledby={'storeArea-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<UpdateAviableProductFormSkeleton />}>
            <UpdateAviableProductForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              productId={productId}
              setValue={setValue}
              store={initValue?.store}
              prevFinalyQuantyti={prevFinalyQuantyti}
              opration={operation}
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
          disabled={!!dataError || (prevFinalyQuantyti !== undefined && prevFinalyQuantyti < 0)}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(AviableProductEditModal);
