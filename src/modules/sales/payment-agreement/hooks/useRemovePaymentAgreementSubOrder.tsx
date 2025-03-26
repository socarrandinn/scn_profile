import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaymentAgreementService } from 'modules/sales/payment-agreement/services';
import { PAYMENT_AGREEMENTS_LIST_KEY } from 'modules/sales/payment-agreement/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';

export const useRemovePaymentAgreementSubOrder = (paymentAgreementId: string, id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('paymentAgreement');
  const filters = useMemo(
    () => new TermFilter({ field: '_id', value: paymentAgreementId, objectId: true }),
    [paymentAgreementId],
  );
  return useMutation(() => PaymentAgreementService.remove(paymentAgreementId, filters), {
    onSuccess: (data) => {
      toast.success(t('successSubOrderDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PAYMENT_AGREEMENTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
