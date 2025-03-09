import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useStoreAddressCreateForm from 'modules/inventory/warehouse/hooks/useStoreAddressCreateForm';
import { StoreGeneralAddressForm } from 'modules/inventory/warehouse/components/StoreGeneralAddressForm';
import StoreGeneralAddressFormSkeleton from '../../components/StoreGeneralAddressForm/StoreGeneralAddressFormSkeleton';

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
  const { control, onSubmit, isLoading, error, reset, watch, setValue, formState, clearErrors } =
    useStoreAddressCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralAddressFormSkeleton />}>
          <StoreGeneralAddressForm
            error={error}
            formState={formState}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            watch={watch}
            setValue={setValue}
            clearErrors={clearErrors}
          />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='form-address'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(StoreDetailAddressUpdateContainer);
