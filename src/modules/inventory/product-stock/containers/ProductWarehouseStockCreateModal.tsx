import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IStock } from '../interfaces/IStock';
import useProductWarehouseStockCreateForm from '../hooks/useProductWarehouseStockCreateForm';
import { ProductUpdateStockForm, ProductUpdateStockFormSkeleton } from '../components/ProductUpdateStockForm';

type ProductWarehouseStockCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title: string;
  dataError?: any;
  initValue?: IStock;
  onClose: () => void;
};
const ProductWarehouseStockCreateModal = ({
  title,
  open,
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductWarehouseStockCreateModalProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, reset, error, setValue } = useProductWarehouseStockCreateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm open={open} isLoading={loadingInitData} title={t(title)} aria-labelledby={'stock-creation-title'}>
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
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:discard')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:saveChange')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ProductWarehouseStockCreateModal);
