import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useConciliationAdjustmentCausesCreateForm from 'modules/sales/settings/conciliation-adjustment-causes/hooks/useConciliationAdjustmentCausesCreateForm';
import { IConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/interfaces';
import { ConciliationAdjustmentCausesForm, ConciliationAdjustmentCausesFormSkeleton } from 'modules/sales/settings/conciliation-adjustment-causes/components/ConciliationAdjustmentCausesForm';

type ConciliationAdjustmentCausesCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IConciliationAdjustmentCauses;
  onClose: () => void;
};
const ConciliationAdjustmentCausesCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: ConciliationAdjustmentCausesCreateModalProps) => {
  const { t } = useTranslation('conciliationAdjustmentCauses');
  const { control, onSubmit, isLoading, reset, error } = useConciliationAdjustmentCausesCreateForm(onClose, initValue);
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
      aria-labelledby={'conciliationAdjustmentCauses-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ConciliationAdjustmentCausesFormSkeleton />}>
            <ConciliationAdjustmentCausesForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(ConciliationAdjustmentCausesCreateModal);
