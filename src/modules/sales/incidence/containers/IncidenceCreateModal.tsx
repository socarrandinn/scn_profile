import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useIncidenceCreateForm from 'modules/sales/incidence/hooks/useIncidenceCreateForm';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { IncidenceForm, IncidenceFormSkeleton } from 'modules/sales/incidence/components/IncidenceForm';
import { INCIDENCE_ERRORS } from 'modules/sales/incidence/constants';
import { mapGetOneErrors } from 'constants/errors';

type IncidenceCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IIncidence;
  onClose: () => void;
};
const IncidenceCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: IncidenceCreateModalProps) => {
  const { t } = useTranslation('incidence');
  const { control, onSubmit, isLoading, reset, error } = useIncidenceCreateForm(onClose, initValue);
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
      aria-labelledby={'incidence-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<IncidenceFormSkeleton />}>
            <IncidenceForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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

export default memo(IncidenceCreateModal);
