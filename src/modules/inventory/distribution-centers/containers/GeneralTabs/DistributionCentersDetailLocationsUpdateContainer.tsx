import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useDistributionCenterLocationsCreateForm from '../../hooks/useDistributionCenterLocationsCreateForm';
import { DistributionCentersGeneralLocationsForm } from '../../components/DistributionCentersGeneralLocationsForm';
import DistributionCentersGeneralLocationsFormSkeleton from '../../components/DistributionCentersGeneralLocationsForm/DistributionCentersGeneralLocationsFormSkeleton';

type DistributionCentersDetailLocationsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IDistributionCenters>;
  onClose: () => void;
};

const DistributionCentersDetailLocationsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: DistributionCentersDetailLocationsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useDistributionCenterLocationsCreateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<DistributionCentersGeneralLocationsFormSkeleton />}>
          <DistributionCentersGeneralLocationsForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
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
          form='form-warehouse-locations'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(DistributionCentersDetailLocationsUpdateContainer);
