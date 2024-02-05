import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { IStore } from 'modules/inventory/store/interfaces';
import StoreGeneralContactFormSkeleton from 'modules/inventory/store/components/StoreGeneralContactForm/StoreGeneralContactFormSkeleton';
import { StoreGeneralContactForm } from 'modules/inventory/store/components/StoreGeneralContactForm';
import useStoreContactCreateForm from 'modules/inventory/store/hooks/useStoreContactCreateForm';

type StoreDetailContactUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IStore>;
  onClose: () => void;
};

const StoreDetailContactUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: StoreDetailContactUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useStoreContactCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralContactFormSkeleton />}>
          <StoreGeneralContactForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-store-contact'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(StoreDetailContactUpdateContainer);
