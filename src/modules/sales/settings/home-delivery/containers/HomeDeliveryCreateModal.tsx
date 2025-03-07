import { memo, useCallback, useMemo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import {
  DeliveryCreateDestinationForm,
  DeliveryCreateDestinationFormSkeleton,
} from 'modules/sales/settings/common/components/DeliveryCreateDestinationForm';
import { useSearchParams } from 'react-router-dom';
import useHomeDeliveryCreateLocation from '../hooks/useHomeDeliveryCreateLocation';
import { useShippingHomeSettings } from '../contexts';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { DELIVERY_CITY_ERRORS, DELIVERY_ERRORS, DELIVERY_PROVINCE_ERRORS } from '../constants/home-delivery.errors';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

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
  const type = searchParams.get('type') ?? initValue?.location?.type;
  const state = searchParams.get('state') ?? initValue?.location?.state;

  const errorByType = useMemo(() => {
    switch (type) {
      case LOCATION_TYPE.STATE:
        return DELIVERY_PROVINCE_ERRORS;
      case LOCATION_TYPE.CITY:
        return DELIVERY_CITY_ERRORS;
      default:
        return DELIVERY_ERRORS;
    }
  }, [type]);

  const { control, onSubmit, isLoading, reset, error, setValue, watch, formState } = useHomeDeliveryCreateLocation(
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
      sx={{ '.MuiDialogTitle-root': { pb: 1 }, '.MuiDialog-paper': { maxWidth: '701px' } }}
      aria-labelledby={'homeDelivery-creation-title'}
    >
      <DialogContent sx={{ pt: '12px !important' }}>
        {dataError && <HandlerError error={dataError} errors={errorByType} />}
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DeliveryCreateDestinationFormSkeleton />}>
            <HandlerError error={error} errors={errorByType} />
            <Form onSubmit={onSubmit} control={control} watch={watch} setValue={setValue} isLoading={isLoading} size={'small'} id={'location-form'} formState={formState}>
              <DeliveryCreateDestinationForm
                settings={settings as IDelivery}
                type={type}
                state={state}
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
