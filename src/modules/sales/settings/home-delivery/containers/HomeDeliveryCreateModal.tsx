import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { mapGetOneErrors } from 'constants/errors';
import {
  DeliveryCreateDestinationForm,
  DeliveryCreateDestinationFormSkeleton,
} from 'modules/sales/settings/common/components/DeliveryCreateDestinationForm';
import useHomeDeliveryCreateBulkForm from '../hooks/useHomeDeliveryCreateBulkForm';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const { control, onSubmit, isLoading, reset, error, setValue } = useHomeDeliveryCreateBulkForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'homeDelivery-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} mapError={mapGetOneErrors} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DeliveryCreateDestinationFormSkeleton />}>
            <DeliveryCreateDestinationForm
              type={type}
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
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
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
