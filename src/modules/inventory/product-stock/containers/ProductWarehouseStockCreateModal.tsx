import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IStock } from '../interfaces/IStock';
import useProductWarehouseStockCreateForm from '../hooks/useProductWarehouseStockCreateForm';
import { ProductUpdateStockForm, ProductUpdateStockFormSkeleton } from '../components/ProductUpdateStockForm';
import { ProductStockTable } from '../components/ProductStockTable';

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
  const { control, onSubmit, isLoading, reset, error, setValue } = useProductWarehouseStockCreateForm(
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
      aria-labelledby={'stock-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ProductUpdateStockFormSkeleton />}>
            <ProductUpdateStockForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              setValue={setValue}
            />
            <DialogActions sx={{ mt: 2 }}>
              <LoadingButton loading={isLoading || loadingInitData} variant='outlined' onClick={handleClose}>
                {t('action.saveToContinue')}
              </LoadingButton>
              <LoadingButton
                variant='contained'
                type={'submit'}
                loading={isLoading || loadingInitData}
                disabled={!!dataError}
                form='form'
              >
                {t('action:saveToFinished')}
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
