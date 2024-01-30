import React, { memo, useCallback } from 'react';
import { IClients } from '../interfaces';
import { useTranslation } from 'react-i18next';
import useClientBasicForm from 'modules/crm/clients/hooks/useClientBasicForm';
import { Box, Button, Stack } from '@mui/material';
import { ConditionContainer, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import GeneralContactFormSkeleton from 'modules/inventory/provider/common/components/GeneralContactForm/GeneralContactFormSkeleton';
import ClientsBasicForm from 'modules/crm/clients/components/ClientsForm/ClientsBasicForm';

type ClientDetailBasicUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IClients>;
  onClose: () => void;
};

const ClientDetailBasicUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ClientDetailBasicUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useClientBasicForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<GeneralContactFormSkeleton />}>
          <ClientsBasicForm error={error} control={control} isLoading={isLoading} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='ClientBasicForm'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ClientDetailBasicUpdateContainer);
