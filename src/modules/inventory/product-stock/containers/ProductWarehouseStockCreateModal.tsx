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
import useStockWarehouseCreateForm from '../hooks/useStockWarehouseCreateForm';

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
  const { control, onSubmit, onContinueSubmit, isLoading, reset, error, items } = useStockWarehouseCreateForm(
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
      title={t(title)}
      subtitle={t(subtitle || '')}
      maxWidth={'md'}
      aria-labelledby={'stock-creation-title'}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          handleClose();
        }
      }}
      disableEscapeKeyDown
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ProductUpdateStockFormSkeleton />}>
            <StockHandlerError error={error} loadingInitData={isLoading} />
            <ProductUpdateStockForm isLoading={isLoading} control={control} onSubmit={onSubmit} onlyAdd />
            <DialogActions sx={{ my: 2 }}>
              <LoadingButton loading={isLoading || loadingInitData} variant='grey' onClick={(e) => onContinueSubmit(e)}>
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
            <ProductStockTable items={items} />
          </ConditionContainer>
        )}
      </DialogContent>
    </DialogForm>
  );
};

export default memo(ProductWarehouseStockCreateModal);
