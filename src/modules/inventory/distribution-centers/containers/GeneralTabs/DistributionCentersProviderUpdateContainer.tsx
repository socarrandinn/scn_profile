import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import DistributionCentersGeneralBasicFormSkeleton from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralBasicForm/DistributionCentersGeneralBasicFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { DistributionCentersGeneralProviderForm } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralProviderForm';
import useDistributionCentersProviderCreateForm from 'modules/inventory/distribution-centers/hooks/useDistributionCentersProviderCreateForm';

type DistributionCentersProviderUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IDistributionCenters>;
  onClose: () => void;
};

const DistributionCentersProviderUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: DistributionCentersProviderUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useDistributionCentersProviderCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<DistributionCentersGeneralBasicFormSkeleton />}>
          <DistributionCentersGeneralProviderForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='form-distribution-centers-provider'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(DistributionCentersProviderUpdateContainer);
