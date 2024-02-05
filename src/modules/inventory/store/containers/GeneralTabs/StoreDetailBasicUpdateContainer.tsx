import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { IStore } from 'modules/inventory/store/interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import StoreGeneralBasicFormSkeleton from 'modules/inventory/store/components/StoreGeneralBasicForm/StoreGeneralBasicFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { StoreGeneralBasicForm } from 'modules/inventory/store/components/StoreGeneralBasicForm';
import useStoreBasicCreateForm from 'modules/inventory/store/hooks/useStoreBasicCreateForm';

type storeDetailBasicUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IStore>;
  onClose: () => void;
};

const StoreDetailBasicUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: storeDetailBasicUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useStoreBasicCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralBasicFormSkeleton />}>
          <StoreGeneralBasicForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-store-basic'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(StoreDetailBasicUpdateContainer);
