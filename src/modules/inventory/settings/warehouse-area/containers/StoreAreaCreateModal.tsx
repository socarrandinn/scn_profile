import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useStoreAreaCreateForm from 'modules/inventory/settings/warehouse-area/hooks/useStoreAreaCreateForm';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';
import { StoreAreaForm, StoreAreaFormSkeleton } from 'modules/inventory/settings/warehouse-area/components/StoreAreaForm';

type StoreAreaCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IWarehouseArea;
  onClose: () => void;
};
const StoreAreaCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: StoreAreaCreateModalProps) => {
  const { t } = useTranslation('warehouseArea');
  const { control, onSubmit, isLoading, reset, error } = useStoreAreaCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      // onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'warehouseArea-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<StoreAreaFormSkeleton />}>
            <StoreAreaForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(StoreAreaCreateModal);
