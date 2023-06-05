import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { TimeOffForm, TimeOffFormSkeleton } from '../components/TimeOffForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import useTimeOffCreateForm from '../hooks/useTimeOffCreateForm';

type TimeOffCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  employee: string;
  dataError?: any;
  initValue?: IEmployeeTimeOff;
  onClose: () => void;
};
const TimeOffCreateModal = ({
  title = 'create',
  employee,
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: TimeOffCreateModalProps) => {
  const { t } = useTranslation('employee');
  const { control, onSubmit, isLoading, reset, error } = useTimeOffCreateForm(employee, onClose, initValue);
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
      aria-labelledby={'time-off-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<TimeOffFormSkeleton />}>
            <TimeOffForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(TimeOffCreateModal);
