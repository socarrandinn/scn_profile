import { memo } from 'react';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';
import useReconciliationAdjustmentCreateForm from '../hooks/useReconciliationAdjustmentCreateForm';
import {
  ReconciliationAdjustmentForm,
  ReconciliationAdjustmentFormSkeleton,
} from '../components/ReconciliationAdjustmentForm';
import { useReconciliationAdjustmentParamsSearch } from '../hooks/useReconciliationAdjustmentParamsSearch';

type ReconciliationAdjustmentCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: any;
  onClose: () => void;
};

const ReconciliationAdjustmentCreateModal = ({
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  title = 'create',
}: ReconciliationAdjustmentCreateModalProps) => {
  const { t } = useTranslation('reconciliationAdjustment');
  const { error, control, isLoading, onSubmit } = useReconciliationAdjustmentCreateForm(onClose, initValue);
  const { isDetail } = useReconciliationAdjustmentParamsSearch();

  return (
    <DialogForm
      open={open}
      onClose={onClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'reconciliation-adjustment-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ReconciliationAdjustmentFormSkeleton />}>
            <ReconciliationAdjustmentForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      {!isDetail && (
        <DialogActions>
          <Button variant='grey' onClick={onClose}>
            {t('common:cancel')}
          </Button>
          <LoadingButton
            variant='contained'
            type={'submit'}
            loading={loadingInitData || isLoading}
            disabled={!!dataError}
            form='form-adjust'
          >
            {t('common:save')}
          </LoadingButton>
        </DialogActions>
      )}
    </DialogForm>
  );
};

export default memo(ReconciliationAdjustmentCreateModal);
