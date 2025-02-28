import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';
import {
  DeliveryCreateDestinationForm,
  DeliveryCreateDestinationFormSkeleton,
} from 'modules/sales/settings/common/components/DeliveryCreateDestinationForm';
import { useSearchParams } from 'react-router-dom';
import useHomeDeliveryCreateLocation from '../hooks/useHomeDeliveryCreateLocation';
import { useShippingHomeSettings } from '../contexts';
import { IDelivery } from 'modules/sales/settings/common/interfaces'

type HomeDeliveryCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: any;
  onClose: () => void;
};
const HomeDeliveryCreateModal = ({
  title = 'add',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: HomeDeliveryCreateModalProps) => {
  const { t } = useTranslation('homeDelivery');
  const { settings } = useShippingHomeSettings();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const state = searchParams.get('state');

  const { control, onSubmit, isLoading, reset, error, setValue, watch } = useHomeDeliveryCreateLocation(
    initValue,
    onClose,
  );

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
      sx={{ '.MuiDialogTitle-root': { pb: 1 } }}
      aria-labelledby={'homeDelivery-creation-title'}
    >
      <DialogContent sx={{ pt: '12px !important' }}>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DeliveryCreateDestinationFormSkeleton />}>
            <HandlerError error={error} />
            <Form onSubmit={onSubmit} control={control} watch={watch} setValue={setValue} isLoading={isLoading} size={'small'} id={'location-form'}>
              <DeliveryCreateDestinationForm
                settings={settings as IDelivery}
                type={type || initValue?.location?.type}
                state={state || initValue?.location?.state}
              />
            </Form>
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
          form='location-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(HomeDeliveryCreateModal);
