import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useReasonForCompensationChangeCreateForm from 'modules/store/product/settings/reason-for-compensation-change/hooks/useReasonForCompensationChangeCreateForm';
import { IReasonForCompensationChange } from 'modules/store/product/settings/reason-for-compensation-change/interfaces';
import {
  ReasonForCompensationChangeForm,
  ReasonForCompensationChangeFormSkeleton,
} from 'modules/store/product/settings/reason-for-compensation-change/components/ReasonForCompensationChangeForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type ReasonForCompensationChangeCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IReasonForCompensationChange;
  onClose: () => void;
};
const ReasonForCompensationChangeCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: ReasonForCompensationChangeCreateModalProps) => {
  const { t } = useTranslation('reasonForCompensationChange');
  const { control, onSubmit, isLoading, reset, error } = useReasonForCompensationChangeCreateForm(onClose, initValue);
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
      aria-labelledby={'reasonForCompensationChange-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<ReasonForCompensationChangeFormSkeleton />}>
            <ReasonForCompensationChangeForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
            />
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

export default memo(ReasonForCompensationChangeCreateModal);
