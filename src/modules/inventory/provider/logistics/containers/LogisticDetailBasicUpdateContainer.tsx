import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { LogisticGeneralBasicForm } from '../components/LogisticGeneralBasicForm';
import LogisticGeneralBasicFormSkeleton from '../components/LogisticGeneralBasicForm/LogisticGeneralBasicFormSkeleton';
import useLogisticBasicUpdateForm from '../hooks/useLogisticBasicUpdateForm';
import { ILogistics } from '../interfaces';

type LogisticDetailBasicUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ILogistics>;
  onClose: () => void;
};

const LogisticDetailBasicUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: LogisticDetailBasicUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useLogisticBasicUpdateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<LogisticGeneralBasicFormSkeleton />}>
          <LogisticGeneralBasicForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='basic-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(LogisticDetailBasicUpdateContainer);
