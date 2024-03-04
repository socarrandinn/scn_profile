import { ConditionContainer, DialogForm, HandlerError } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { mapGetOneErrors } from 'constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useProductStockCreateForm from '../hooks/useProductStockCreateForm';
import { IStock } from '../interfaces/IStock';
import { UpdateStockForm, UpdateStockFormSkeleton } from '../components/UpdateStockForm';

type ProductStockCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title: string;
  dataError?: any;
  initValue?: IStock;
  productId: string;
  storeId: string;
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
  storeId,
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
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'stock-creation-title'}
    >
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
              storeId={storeId}
              setValue={setValue}
              isDirectory={isDirectory}
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

export default memo(ProductStockCreateModal);
