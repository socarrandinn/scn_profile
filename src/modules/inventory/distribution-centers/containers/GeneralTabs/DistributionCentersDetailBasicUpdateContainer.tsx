import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import DistributionCentersGeneralBasicFormSkeleton from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralBasicForm/DistributionCentersGeneralBasicFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { DistributionCentersGeneralBasicForm } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralBasicForm';
import useDistributionCentersBasicCreateForm from 'modules/inventory/distribution-centers/hooks/useDistributionCentersBasicCreateForm';

type DistributionCentersDetailBasicUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IWarehouse>;
  onClose: () => void;
};

const DistributionCentersDetailBasicUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: DistributionCentersDetailBasicUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useDistributionCentersBasicCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<DistributionCentersGeneralBasicFormSkeleton />}>
          <DistributionCentersGeneralBasicForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='form-warehouse-basic'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(DistributionCentersDetailBasicUpdateContainer);
