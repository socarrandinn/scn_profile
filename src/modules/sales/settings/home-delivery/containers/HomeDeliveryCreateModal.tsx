import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useHomeDeliveryCreateForm from 'modules/sales/settings/home-delivery/hooks/useHomeDeliveryCreateForm';
import {
  HomeDeliveryForm,
  HomeDeliveryFormSkeleton,
} from 'modules/sales/settings/home-delivery/components/HomeDeliveryForm';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';

type HomeDeliveryCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: any;
  onClose: () => void;
};
const HomeDeliveryCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: HomeDeliveryCreateModalProps) => {
  const { t } = useTranslation('homeDelivery');
  const { control, onSubmit, isLoading, reset, error, setValue } = useHomeDeliveryCreateForm(onClose, initValue);
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
      aria-labelledby={'homeDelivery-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<HomeDeliveryFormSkeleton />}>
            <HomeDeliveryForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              setValue={setValue}
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

export default memo(HomeDeliveryCreateModal);
