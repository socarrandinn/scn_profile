import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useLogisticsCreateForm from 'modules/provider/logistics/hooks/useLogisticsCreateForm';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import { LogisticsForm, LogisticsFormSkeleton } from 'modules/provider/logistics/components/LogisticsForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type LogisticsCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ILogistics;
  onClose: () => void;
};
const LogisticsCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: LogisticsCreateModalProps) => {
  const { t } = useTranslation('logistics');
  const { control, onSubmit, isLoading, reset, error } = useLogisticsCreateForm(onClose, initValue);
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
      aria-labelledby={'logistics-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<LogisticsFormSkeleton />}>
            <LogisticsForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(LogisticsCreateModal);
