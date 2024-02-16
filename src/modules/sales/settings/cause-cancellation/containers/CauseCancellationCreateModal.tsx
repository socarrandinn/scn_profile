import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useCauseCancellationCreateForm from 'modules/sales/settings/cause-cancellation/hooks/useCauseCancellationCreateForm';
import { ICauseCancellation } from 'modules/sales/settings/cause-cancellation/interfaces';
import { CauseCancellationForm, CauseCancellationFormSkeleton } from 'modules/sales/settings/cause-cancellation/components/CauseCancellationForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type CauseCancellationCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ICauseCancellation;
  onClose: () => void;
};
const CauseCancellationCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: CauseCancellationCreateModalProps) => {
  const { t } = useTranslation('causeCancellation');
  const { control, onSubmit, isLoading, reset, error } = useCauseCancellationCreateForm(onClose, initValue);
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
      aria-labelledby={'causeCancellation-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<CauseCancellationFormSkeleton />}>
            <CauseCancellationForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(CauseCancellationCreateModal);
