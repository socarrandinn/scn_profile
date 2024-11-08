import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IStock } from '../interfaces/IStock';
import { ProductUpdateStockForm, ProductUpdateStockFormSkeleton } from '../components/ProductUpdateStockForm';
import { ProductStockTable } from '../components/ProductStockTable';
import StockHandlerError from '../components/HandleErrors/StockHandlerError';
import useProductWarehouseStockCreateForm from '../hooks/useProductWarehouseStockCreateForm';

type ProductWarehouseStockCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title: string;
  subtitle?: string;
  dataError?: any;
  initValue?: IStock;
  onClose: () => void;
};
const ProductWarehouseStockCreateModal = ({
  title,
  subtitle,
  open,
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductWarehouseStockCreateModalProps) => {
  const { t } = useTranslation('stock');
  const { control, onSubmit, isLoading, reset, error } = useProductWarehouseStockCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={t(title)}
      subtitle={t(subtitle || '')}
      aria-labelledby={'stock-creation-title'}
      onClose={handleClose}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ProductUpdateStockFormSkeleton />}>
            {/*  // todo - revisar si al no existir la relacion proveedor comission que se add */}
            <StockHandlerError error={error} initValue={undefined} loadingInitData={isLoading} />
            <ProductUpdateStockForm isLoading={isLoading} control={control} onSubmit={onSubmit} />
            <DialogActions sx={{ mt: 2 }}>
              <LoadingButton loading={isLoading || loadingInitData} variant='outlined' onClick={handleClose}>
                {t('action.saveToContinue')}
              </LoadingButton>
              <LoadingButton
                variant='contained'
                type={'submit'}
                loading={isLoading || loadingInitData}
                disabled={!!dataError}
                form='form-update-stock'
              >
                {t('action.saveToFinished')}
              </LoadingButton>
            </DialogActions>
            <ProductStockTable items={[]} />
          </ConditionContainer>
        )}
      </DialogContent>
    </DialogForm>
  );
};

export default memo(ProductWarehouseStockCreateModal);
