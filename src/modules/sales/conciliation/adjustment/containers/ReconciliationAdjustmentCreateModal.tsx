import { memo } from 'react';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';
import { useSearchParams } from 'react-router-dom';
import useReconciliationAdjustmentCreateForm from '../hooks/useReconciliationAdjustmentCreateForm';
import {
  ReconciliationAdjustmentForm,
  ReconciliationAdjustmentFormSkeleton,
} from '../components/ReconciliationAdjustmentForm';

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
  title = 'formAdjustmentConciliation.title',
}: ReconciliationAdjustmentCreateModalProps) => {
  const { t } = useTranslation('conciliation');
  const { error, control, isLoading, onSubmit, watch } = useReconciliationAdjustmentCreateForm(onClose, initValue);

  const [searchParams] = useSearchParams();
  const detailId = searchParams.get('details');
  const conciliationAssigned = watch('conciliation.assigned');

  return (
    <DialogForm
      open={open}
      onClose={onClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'shippingMethods-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ReconciliationAdjustmentFormSkeleton />}>
            <ReconciliationAdjustmentForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              watch={watch}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      {!detailId && (
        <DialogActions>
          <Button onClick={onClose}>{t('common:cancel')}</Button>
          <LoadingButton
            variant='contained'
            type={'submit'}
            loading={loadingInitData}
            disabled={!!dataError || !!conciliationAssigned}
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
