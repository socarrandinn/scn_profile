import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaymentAgreementService } from 'modules/sales/payment-agreement/services';
import { PAYMENT_AGREEMENTS_LIST_KEY } from 'modules/sales/payment-agreement/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { PAYMENT_AGREEMENT_ROUTE } from '../constants/payment-agreement-route';

export const useDeletePaymentAgreement = (id: string, onClose: () => void, onRedirect?: boolean) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation('paymentAgreement');
  return useMutation(() => PaymentAgreementService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([PAYMENT_AGREEMENTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
      if (onRedirect) {
        navigate(PAYMENT_AGREEMENT_ROUTE.LIST);
      }
    },
  });
};
