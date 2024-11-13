import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useStockReductionCauseCreateForm from 'modules/inventory/settings/stock-reduction-cause/hooks/useStockReductionCauseCreateForm';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import {
  StockReductionCauseForm,
  StockReductionCauseFormSkeleton,
} from 'modules/inventory/settings/stock-reduction-cause/components/StockReductionCauseForm';

type StockReductionCauseCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IStockReductionCause;
  onClose: () => void;
};
const StockReductionCauseCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: StockReductionCauseCreateModalProps) => {
  const { t } = useTranslation('stockReductionCause');
  const { control, onSubmit, isLoading, reset, error } = useStockReductionCauseCreateForm(onClose, initValue);
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
      aria-labelledby={'stockReductionCause-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<StockReductionCauseFormSkeleton />}>
            <StockReductionCauseForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(StockReductionCauseCreateModal);
