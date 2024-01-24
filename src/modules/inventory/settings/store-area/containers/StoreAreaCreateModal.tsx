import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useStoreAreaCreateForm from 'modules/inventory/settings/store-area/hooks/useStoreAreaCreateForm';
import { IStoreArea } from 'modules/inventory/settings/store-area/interfaces';
import { StoreAreaForm, StoreAreaFormSkeleton } from 'modules/inventory/settings/store-area/components/StoreAreaForm';

type StoreAreaCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStoreArea;
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
  const { t } = useTranslation('storeArea');
  const { control, onSubmit, isLoading, reset, error } = useStoreAreaCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'storeArea-creation-title'}
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
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
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
