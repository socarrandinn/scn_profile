import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';
import { IPlace } from '../interfaces';
import usePickUpPointCreateForm from '../hooks/usePickUpPointCreateForm';
import { PickUpPointForm, PickUpPointFormSkeleton } from '../components/PickUpPointForm';

type PickUpPointCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: 'create' | 'edit';
  dataError?: any;
  initValue?: IPlace;
  onClose: () => void;
};
const PickUpPointCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: PickUpPointCreateModalProps) => {
  const { t } = useTranslation('storePickup');
  const { control, onSubmit, isLoading, reset, error, watch } = usePickUpPointCreateForm(onClose, initValue, title);

  const handleClose = useCallback(
    (event: any, reason?: 'backdropClick' | 'escapeKeyDown') => {
      if (reason !== 'backdropClick') {
        onClose?.();
        reset();
      }
    },
    [onClose, reset],
  );

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(`pickupPoint.${title}`)}
      aria-labelledby={'pickup-point-place-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<PickUpPointFormSkeleton />}>
            <PickUpPointForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} watch={watch} />
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
          form='place-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(PickUpPointCreateModal);
