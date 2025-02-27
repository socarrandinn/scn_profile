import { ConditionContainer, Form, HandlerError, SkeletonForm } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { IDistributionCenters } from '../../interfaces';
import useDistributionCentersUpdateCommission from '../../hooks/useDistributionCentersUpdateCommission';
import { ManipulationCommissionForm } from 'modules/inventory/common/components/ManipulationCommissionForm';

type Props = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IDistributionCenters>;
  onClose: () => void;
};

const DistributionCentersCommissionUpdate = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: Props) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, setValue, formState, commissionType } =
    useDistributionCentersUpdateCommission(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={3} />}>
          <HandlerError error={error} />
          <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'form-handling-cost'} setValue={setValue}>
            <ManipulationCommissionForm initPriceType={commissionType} />
          </Form>
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
          form='form-handling-cost'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(DistributionCentersCommissionUpdate);
