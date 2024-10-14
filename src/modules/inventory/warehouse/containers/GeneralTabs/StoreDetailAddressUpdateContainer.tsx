import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import StoreGeneralAddresFormSkeleton from 'modules/inventory/warehouse/components/StoreGeneralAddressForm/StoreGeneralAddresFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useStoreAddressCreateForm from 'modules/inventory/warehouse/hooks/useStoreAddressCreateForm';
import { StoreGeneralAddressForm } from 'modules/inventory/warehouse/components/StoreGeneralAddressForm';

type StoreDetailAddressUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IWarehouse>;
  onClose: () => void;
};

const StoreDetailAddressUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: StoreDetailAddressUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, state, watch, setValue } = useStoreAddressCreateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralAddresFormSkeleton />}>
          <StoreGeneralAddressForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            state={state}
            watch={watch}
            setValue={setValue}
          />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-address'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(StoreDetailAddressUpdateContainer);
