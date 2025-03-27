import { memo, useCallback, useMemo } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { mapGetOneErrors } from 'constants/errors';
import { useTableSearch } from '@dfl/mui-admin-layout';
import { IPaymentAgreement, IPaymentAgreementVerify } from '../interfaces';
import { usePaymentAgreementVerify } from '../hooks/usePaymentAgreementVerify';
import usePaymentAgreementUpdateForm from '../hooks/usePaymentAgreementUpdateForm';
import { PAYMENT_AGREEMENT_ERRORS } from '../constants';

import {
  PaymentAgreementUpdateForm,
  PaymentAgreementUpdateFormSkeleton,
} from '../components/PaymentAgreementUpdateForm';
import PaymentAgreementVerifySummary from '../components/PaymentAgreementSummary/PaymentAgreementVerifySummary';

type PaymentAgreementUpdateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  filters?: any;
  initValue?: Omit<IPaymentAgreement, '_id' | 'metrics' | 'createdAt'>;
  onClose: () => void;
};

const PaymentAgreementUpdateModal = ({
  title = 'update',
  filters,
  open,
  onClose,
  dataError,
  loadingInitData,
}: PaymentAgreementUpdateModalProps) => {
  const { query } = useTableSearch();
  const { t } = useTranslation('paymentAgreement');
  const { isLoading: isLoadingVerify, data } = usePaymentAgreementVerify(query, filters, open && !!filters);

  const initValue = useMemo(
    () => ({
      filters,
      paymentAgreementId: null,
    }),
    [filters],
  );

  const { control, onSubmit, isLoading, reset, resetMutation, error, setValue } = usePaymentAgreementUpdateForm(
    onClose,
    initValue,
  );
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
    resetMutation();
  }, [onClose, reset, resetMutation]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'dispatch-update-title'}
    >
      <DialogContent>
        {(!data?.isValid || dataError) && (
          <HandlerError error={dataError} errors={PAYMENT_AGREEMENT_ERRORS} mapError={mapGetOneErrors} />
        )}

        <PaymentAgreementVerifySummary data={data as IPaymentAgreementVerify} isLoading={isLoadingVerify} />

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<PaymentAgreementUpdateFormSkeleton />}>
            <PaymentAgreementUpdateForm
              setValue={setValue}
              error={error}
              disabled={!data?.isValid || isLoadingVerify}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError || !data?.isValid}
          form='payment-agreement-update-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(PaymentAgreementUpdateModal);
