import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IStockWarehouseImport } from '../interfaces/IStock';
import { ProductUpdateStockFormSkeleton } from '../components/ProductUpdateStockForm';
import { ProductImportStockForm } from '../components/ProductImportStockForm';
import useStockWarehouseImportCreateForm from '../hooks/useStockWarehouseImportCreateForm';

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
  const { control, onSubmit, isLoading, reset, error } = useStockWarehouseImportCreateForm(onClose, initValue);

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
          <ConditionContainer active={!loadingInitData} alternative={<ProductUpdateStockFormSkeleton />}>
            <HandlerError error={error} />
            <ProductImportStockForm isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant='outlined' onClick={handleClose}>
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
