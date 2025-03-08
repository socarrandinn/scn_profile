import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import DistributionCentersGeneralAddresFormSkeleton from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralAddressForm/DistributionCentersGeneralAddresFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useDistributionCentersAddressCreateForm from 'modules/inventory/distribution-centers/hooks/useDistributionCentersAddressCreateForm';
import { DistributionCentersGeneralAddressForm } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralAddressForm';
import { IDistributionCenters } from '../../interfaces';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

type DistributionCentersDetailAddressUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IDistributionCenters>;
  onClose: () => void;
};

const DistributionCentersDetailAddressUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: DistributionCentersDetailAddressUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, watch, setValue, formState, clearErrors } =
    useDistributionCentersAddressCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<DistributionCentersGeneralAddresFormSkeleton />}>
          <DistributionCentersGeneralAddressForm
            countryCode={ADDRESS_COUNTRY_CODE}
            error={error}
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

export default memo(DistributionCentersDetailAddressUpdateContainer);
