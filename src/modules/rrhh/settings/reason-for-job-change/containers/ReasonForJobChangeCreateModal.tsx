import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useReasonForJobChangeCreateForm from 'modules/rrhh/settings/reason-for-job-change/hooks/useReasonForJobChangeCreateForm';
import { IReasonForJobChange } from 'modules/rrhh/settings/reason-for-job-change/interfaces';
import {
  ReasonForJobChangeForm,
  ReasonForJobChangeFormSkeleton,
} from 'modules/rrhh/settings/reason-for-job-change/components/ReasonForJobChangeForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type ReasonForJobChangeCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IReasonForJobChange;
  onClose: () => void;
};
const ReasonForJobChangeCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: ReasonForJobChangeCreateModalProps) => {
  const { t } = useTranslation('reasonForJobChange');
  const { control, onSubmit, isLoading, reset, error } = useReasonForJobChangeCreateForm(onClose, initValue);
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
      aria-labelledby={'reasonForJobChange-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ReasonForJobChangeFormSkeleton />}>
            <ReasonForJobChangeForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(ReasonForJobChangeCreateModal);
