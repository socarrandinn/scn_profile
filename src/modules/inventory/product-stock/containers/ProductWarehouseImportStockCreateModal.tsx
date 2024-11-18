import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IStockWarehouseImport } from '../interfaces/IStock';
import useStockWarehouseImportCreateForm from '../hooks/useStockWarehouseImportCreateForm';
import { StockImportForm, StockImportFormSkeleton } from '../components/ProductImportStockForm';
import { stockWarehouseImportStockSchema } from '../schemas/stock.schema';

type ProductWarehouseImportStockCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title: string;
  subtitle?: string;
  dataError?: any;
  initValue?: IStockWarehouseImport;
  onClose: () => void;
};
const ProductWarehouseImportStockCreateModal = ({
  title,
  subtitle,
  open,
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductWarehouseImportStockCreateModalProps) => {
  const { t } = useTranslation('stock');

  const { control, onSubmit, isLoading, reset, error } = useStockWarehouseImportCreateForm(
    onClose,
    initValue,
    stockWarehouseImportStockSchema,
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
      aria-labelledby={'stock-creation-title'}
      onClose={handleClose}
      maxWidth={'sm'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<StockImportFormSkeleton />}>
            <HandlerError error={error} />
            <StockImportForm isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-import-stock'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ProductWarehouseImportStockCreateModal);
