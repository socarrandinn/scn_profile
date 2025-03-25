import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import usePaymentAgreementCreateForm from 'modules/sales/payment-agreement/hooks/usePaymentAgreementCreateForm';
import { IPaymentAgreement } from 'modules/sales/payment-agreement/interfaces';
import {
  PaymentAgreementForm,
  PaymentAgreementFormSkeleton,
} from 'modules/sales/payment-agreement/components/PaymentAgreementForm';

type PaymentAgreementCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IPaymentAgreement;
  onClose: () => void;
};
const PaymentAgreementCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: PaymentAgreementCreateModalProps) => {
  const { t } = useTranslation('paymentAgreement');
  const { control, onSubmit, isLoading, reset, error } = usePaymentAgreementCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'paymentAgreement-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<PaymentAgreementFormSkeleton />}>
            <PaymentAgreementForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
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
      </DialogActions>
    </DialogForm>
  );
};

export default memo(PaymentAgreementCreateModal);
