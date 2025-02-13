import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStockWarehouseImport } from '../interfaces/IStock';
import useStockWarehouseImportCreateForm from '../hooks/useStockWarehouseImportCreateForm';
import { StockImportForm, StockImportFormSkeleton } from '../components/ProductImportStockForm';
import { stockWarehouseImportStockSchema } from '../schemas/stock.schema';
import { PRODUCT_STOCK_ERRORS } from '../constants/stock-errors';
import HandleImportError from '../components/HandleImportError/HandleImportError';
import { useToggle } from '@dfl/hook-utils';

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
  const { isOpen: showDetail, onToggle } = useToggle(false);
  const {
    control,
    onSubmit,
    isLoading,
    reset,
    error: summary,
    data: successData,
    isSuccess,
  } = useStockWarehouseImportCreateForm(onClose, initValue, stockWarehouseImportStockSchema);

  const _error = useMemo(() => {
    if (summary?.message) {
      return {
        reference: 'SE001',
        message: summary?.message,
      };
    }
    return null;
  }, [summary?.message]);

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
        {dataError && <HandlerError error={dataError} errors={PRODUCT_STOCK_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<StockImportFormSkeleton />}>
            <HandleImportError error={_error} onClick={onToggle} />
            <StockImportForm
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              summary={{ ...summary, showDetail }}
              successData={successData}
              isSuccess={isSuccess}
              reset={reset}
            />
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
          disabled={!!dataError || isSuccess || !!summary?.message}
          form='form-import-stock'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ProductWarehouseImportStockCreateModal);
