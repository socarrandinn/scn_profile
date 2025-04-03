import { memo, useCallback, useMemo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useTableSearch } from '@dfl/mui-admin-layout';
import { mapGetOneErrors, PAYMENT_AGREEMENT_ERRORS } from '../constants';
import { pick } from 'lodash';
import { usePaymentAgreementVerify } from '../hooks/usePaymentAgreementVerify';
import { PaymentAgreementForm, PaymentAgreementFormSkeleton } from '../components/PaymentAgreementForm';
import { IPaymentAgreement, IPaymentAgreementVerify, PaymentAgreementDTO } from '../interfaces';
import PaymentAgreementVerifySummary from '../components/PaymentAgreementSummary/PaymentAgreementVerifySummary';
import usePaymentAgreementCreateForm, { initPaymentAgreementValues } from '../hooks/usePaymentAgreementCreateForm';
import { useIsValid } from '../hooks/useIsValid';

type PaymentAgreementCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IPaymentAgreement;
  onClose: () => void;
  filters?: any;
};
const PaymentAgreementCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
  filters,
}: PaymentAgreementCreateModalProps) => {
  const { t } = useTranslation('paymentAgreement');
  const { query } = useTableSearch();
  const { data, isLoading: isVerifyLoading } = usePaymentAgreementVerify(query, filters, open && !!filters);

  // valid payment agreement
  const { isValid } = useIsValid(initValue, data);

  const _initValue: PaymentAgreementDTO = useMemo(
    () =>
      pick(
        {
          ...initPaymentAgreementValues,
          ...(initValue as IPaymentAgreement),
          filters,
        },
        ['_id', 'name', 'sendDate', 'driver', 'shippingCost', 'estimatedShippingCost', 'maxShippingCost', 'filters'],
      ),
    [initValue, filters],
  );

  const { control, onSubmit, isLoading, reset, error } = usePaymentAgreementCreateForm(onClose, _initValue);

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
      aria-labelledby={'dispatch-creation-title'}
    >
      <DialogContent>
        {(isValid || dataError) && (
          <HandlerError error={dataError} errors={PAYMENT_AGREEMENT_ERRORS} mapError={mapGetOneErrors} />
        )}
        {!initValue?._id && (
          <PaymentAgreementVerifySummary data={data as IPaymentAgreementVerify} isLoading={isVerifyLoading} />
        )}
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
          loading={isLoading || loadingInitData || isVerifyLoading}
          disabled={!!dataError || isValid}
          form='payment-agreement-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(PaymentAgreementCreateModal);
