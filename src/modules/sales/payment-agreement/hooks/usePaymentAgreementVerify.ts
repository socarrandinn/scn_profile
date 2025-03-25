import { useQuery } from '@tanstack/react-query';
import { PAYMENT_AGREEMENTS_VERIFY_KEY } from '../constants';
import { PaymentAgreementService } from '../services';

export const usePaymentAgreementVerify = (search: any, filters: any, enabled: boolean) => {
  return useQuery(
    [PAYMENT_AGREEMENTS_VERIFY_KEY, filters, search],
    () => PaymentAgreementService.verify(filters, search),
    {
      enabled,
    },
  );
};
