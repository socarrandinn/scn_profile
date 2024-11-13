import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useProductStockCreateForm from '../hooks/useProductStockCreateForm';
import { UpdateStockForm, UpdateStockFormSkeleton } from '../components/UpdateStockForm';
import { IStock } from '../interfaces/IStock';

type ProductStockCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title: ReactNode;
  dataError?: any;
  initValue?: IStock;
  productId: string;
  warehouseId: string;
  onClose: () => void;
  isDirectory?: boolean;
};
const ProductStockCreateModal = ({
  title,
  open,
  dataError,
  initValue,
  loadingInitData,
  productId,
  warehouseId,
  onClose,
  isDirectory,
}: ProductStockCreateModalProps) => {
  const { t } = useTranslation('common');

  const { control, onSubmit, isLoading, reset, error, quantity, isAdd, setValue } = useProductStockCreateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm open={open} isLoading={loadingInitData} title={title} aria-labelledby={'stock-creation-title'}>
      <DialogContent>
        {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<UpdateStockFormSkeleton />}>
            <UpdateStockForm
              isAdd={isAdd}
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              quantity={quantity}
              productId={productId}
              warehouseId={warehouseId}
              setValue={setValue}
              isDirectory={isDirectory}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:discard')}
        </Button>
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

export default memo(ProductStockCreateModal);
