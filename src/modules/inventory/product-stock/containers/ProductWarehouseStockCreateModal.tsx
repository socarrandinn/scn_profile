import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, ReactNode, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStock } from '../interfaces/IStock';
import { UpdateStockFormSkeleton, WarehouseUpdateStockForm } from '../components/UpdateStocksForm';
import { ProductStockTable } from '../components/ProductStockTable';
import StockHandlerError from '../components/HandleErrors/StockHandlerError';
import useStockWarehouseCreateForm from '../hooks/useStockWarehouseCreateForm';

type ProductWarehouseStockCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title: string | ReactNode;
  subtitle?: string;
  dataError?: any;
  initValue?: IStock;
  onClose: () => void;
  Form?: any;
};
const ProductWarehouseStockCreateModal = ({
  title,
  subtitle,
  open,
  dataError,
  initValue,
  loadingInitData,
  onClose,
  Form,
}: ProductWarehouseStockCreateModalProps) => {
  const { t } = useTranslation('stock');
  const FormContent = Form || WarehouseUpdateStockForm;
  const { control, onSubmit, onContinueSubmit, isLoading, reset, error, items } = useStockWarehouseCreateForm(
    onClose,
    initValue,
  );

  const _title = useMemo(() => (typeof title === 'string' ? t(title) : title), [title, t]);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={_title}
      subtitle={t(subtitle || '')}
      maxWidth={'sm'}
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
          <ConditionContainer active={!loadingInitData} alternative={<UpdateStockFormSkeleton />}>
            <StockHandlerError error={error} loadingInitData={isLoading} />
            <FormContent isLoading={isLoading} control={control} onSubmit={onSubmit} onlyAdd />
            <DialogActions sx={{ my: 2 }}>
              <LoadingButton
                loading={isLoading || loadingInitData}
                variant='outlined'
                onClick={(e) => onContinueSubmit(e)}
              >
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
