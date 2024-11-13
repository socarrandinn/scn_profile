import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useStoreLocationsCreateForm from '../../hooks/useStoreLocationsCreateForm';
import { StoreGeneralLocationsForm } from '../../components/StoreGeneralLocationsForm';
import StoreGeneralLocationsFormSkeleton from '../../components/StoreGeneralLocationsForm/StoreGeneralLocationsFormSkeleton';

type StoreDetailLocationsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IWarehouse>;
  onClose: () => void;
};

const StoreDetailLocationsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: StoreDetailLocationsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useStoreLocationsCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralLocationsFormSkeleton />}>
          <StoreGeneralLocationsForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-warehouse-locations'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(StoreDetailLocationsUpdateContainer);
