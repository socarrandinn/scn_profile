import { memo, useCallback } from 'react';
import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { GeneralContactForm } from '../../common/components/GeneralContactForm';
import GeneralContactFormSkeleton from '../../common/components/GeneralContactForm/GeneralContactFormSkeleton';
import { ILogistics } from '../interfaces';
import useLogisticContactUpdateForm from '../hooks/useLogisticContactUpdateForm';

type LogisticDetailContactUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ILogistics>;
  onClose: () => void;
};

const LogisticDetailContactUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: LogisticDetailContactUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useLogisticContactUpdateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<GeneralContactFormSkeleton />}>
          <GeneralContactForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='contact-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(LogisticDetailContactUpdateContainer);
