import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import DistributionCentersGeneralContactFormSkeleton from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralContactForm/DistributionCentersGeneralContactFormSkeleton';
import { DistributionCentersGeneralContactForm } from 'modules/inventory/distribution-centers/components/DistributionCentersGeneralContactForm';
import useDistributionCentersContactCreateForm from 'modules/inventory/distribution-centers/hooks/useDistributionCentersContactCreateForm';

type DistributionCentersDetailContactUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IDistributionCenters>;
  onClose: () => void;
};

const DistributionCentersDetailContactUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: DistributionCentersDetailContactUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useDistributionCentersContactCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<DistributionCentersGeneralContactFormSkeleton />}>
          <DistributionCentersGeneralContactForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-distribution-centers-contact'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(DistributionCentersDetailContactUpdateContainer);
