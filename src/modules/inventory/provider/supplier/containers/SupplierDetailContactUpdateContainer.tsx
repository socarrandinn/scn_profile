import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import useSupplierContactCreateForm from '../hooks/useSupplierContactCreateForm';
import { ISupplier } from '../interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import SupplierGeneralContactFormSkeleton from '../components/SupplierGeneralContactForm/SupplierGeneralContactFormSkeleton';
import { SupplierGeneralContactForm } from '../components/SupplierGeneralContactForm';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';

type SupplierDetailContactUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ISupplier>;
  onClose: () => void;
};

const SupplierDetailContactUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: SupplierDetailContactUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useSupplierContactCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SupplierGeneralContactFormSkeleton />}>
          <SupplierGeneralContactForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  )
};

export default memo(SupplierDetailContactUpdateContainer);
