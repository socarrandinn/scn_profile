import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import StoreGeneralBasicFormSkeleton from 'modules/inventory/warehouse/components/StoreGeneralBasicForm/StoreGeneralBasicFormSkeleton';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import usePaymentAgreementCreateForm from '../../hooks/usePaymentAgreementCreateForm';
import { PaymentAgreementForm } from '../../components/PaymentAgreementForm';
import { IPaymentAgreement } from '../../interfaces';

type PaymentAgreementUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IPaymentAgreement>;
  onClose: () => void;
};

const PaymentAgreementUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: PaymentAgreementUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = usePaymentAgreementCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<StoreGeneralBasicFormSkeleton />}>
          <PaymentAgreementForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            isUpdated
            isDark={false}
            formId='payment-agreement-update-form'
          />
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
          form='payment-agreement-update-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(PaymentAgreementUpdateContainer);
