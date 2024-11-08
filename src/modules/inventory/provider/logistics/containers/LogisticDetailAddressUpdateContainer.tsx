import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import useLogisticAddressUpdateForm from '../hooks/useLogisticAddressUpdateForm';
import { ILogistics } from '../interfaces';
import { GeneralAddressForm } from '../../common/components/GeneralAddressForm';
import GeneralAddressFormSkeleton from '../../common/components/GeneralAddressForm/GeneralAddressFormSkeleton';

type LogisticDetailAddressUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ILogistics>;
  onClose: () => void;
};

const LogisticDetailAddressUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: LogisticDetailAddressUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, state, watch, setValue, formState } = useLogisticAddressUpdateForm(
    onClose,
    initValue,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<GeneralAddressFormSkeleton />}>
          <GeneralAddressForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            state={state}
            watch={watch}
            setValue={setValue}
          />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='address-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(LogisticDetailAddressUpdateContainer);
