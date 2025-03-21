import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useCausesIncidenceCreateForm from 'modules/sales/settings/causes-incidence/hooks/useCausesIncidenceCreateForm';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import {
  CausesIncidenceForm,
  CausesIncidenceFormSkeleton,
} from 'modules/sales/settings/causes-incidence/components/CausesIncidenceForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type CausesIncidenceCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ICausesIncidence;
  onClose: () => void;
};
const CausesIncidenceCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: CausesIncidenceCreateModalProps) => {
  const { t } = useTranslation('causesIncidence');
  const { control, onSubmit, isLoading, reset, error } = useCausesIncidenceCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={t(title)}
      sx={{ '.MuiDialogTitle-root': { paddingBottom: 0 } }}
      aria-labelledby={'causesIncidence-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<CausesIncidenceFormSkeleton />}>
            <CausesIncidenceForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
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

export default memo(CausesIncidenceCreateModal);
