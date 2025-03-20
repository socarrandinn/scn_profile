import React, { memo, useCallback } from 'react';
import { IClients } from '../interfaces';
import { useTranslation } from 'react-i18next';
import useClientContactForm from 'modules/crm/clients/hooks/useClientContactForm';
import { Box, Button, Stack } from '@mui/material';
import { ConditionContainer, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import GeneralContactFormSkeleton from 'modules/inventory/provider/common/components/GeneralContactForm/GeneralContactFormSkeleton';
import ClientContactForm from 'modules/crm/clients/components/ClientsForm/ClientContactForm';

type ClientDetailContactUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IClients>;
  onClose: () => void;
};

const ClientDetailContactUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ClientDetailContactUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useClientContactForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<GeneralContactFormSkeleton />}>
          <ClientContactForm error={error} control={control} isLoading={isLoading} onSubmit={onSubmit} />
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
          disabled={!!dataError}
          form='ClientContactForm'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ClientDetailContactUpdateContainer);
