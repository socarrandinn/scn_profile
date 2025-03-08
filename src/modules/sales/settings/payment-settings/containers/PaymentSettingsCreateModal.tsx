import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import usePaymentSettingsCreateForm from 'modules/sales/settings/payment-settings/hooks/usePaymentSettingsCreateForm';
import { IPaymentSettings } from 'modules/sales/settings/payment-settings/interfaces'

type PaymentSettingsCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IPaymentSettings;
  onClose: () => void;
};
const PaymentSettingsCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: PaymentSettingsCreateModalProps) => {
  const { t } = useTranslation('paymentSettings');
  const { control, onSubmit, isLoading, reset, error } = usePaymentSettingsCreateForm(onClose, initValue);
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
      aria-labelledby={'paymentSettings-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <></>
          // <ConditionContainer active={!loadingInitData} alternative={<PaymentSettingsFormSkeleton />}>
          //   <PaymentSettingsForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          // </ConditionContainer>
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

export default memo(PaymentSettingsCreateModal);
