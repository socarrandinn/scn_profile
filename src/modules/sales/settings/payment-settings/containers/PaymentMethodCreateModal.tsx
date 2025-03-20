import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, Form, HandlerError, LoadingButton, SkeletonForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IPaymentSettings } from 'modules/sales/settings/payment-settings/interfaces';
import usePaymentMethodCreateForm from '../hooks/usePaymentMethodCreateForm';
import { PaymentMethodForm } from '../components/PaymentMethodForm';

type PaymentMethodCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue: IPaymentSettings;
  methodId?: string;
  onClose: () => void;
};

const PaymentMethodCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  methodId,
  initValue,
  loadingInitData,
}: PaymentMethodCreateModalProps) => {
  const { t } = useTranslation('paymentSettings');
  const { control, onSubmit, isLoading, reset, error, formState, watch, initTaxType } = usePaymentMethodCreateForm(
    methodId as string,
    initValue,
    onClose,
  );

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      maxWidth={initValue?.gatewayConfig?.length && initValue?.gatewayConfig?.length > 0 ? 'sm' : 'xs'}
      isLoading={loadingInitData}
      title={`${t('common:configTo')} ${t(title)}`}
      aria-labelledby={'paymentSettings-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<SkeletonForm numberItemsToShow={3} />}>
            <HandlerError error={error} />
            <Form
              formState={formState}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
              watch={watch}
              id={'payment-method-form'}
            >
              <PaymentMethodForm data={initValue} initTaxType={initTaxType} />
            </Form>
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
          form='payment-method-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(PaymentMethodCreateModal);
