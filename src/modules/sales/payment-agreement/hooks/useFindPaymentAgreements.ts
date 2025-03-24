import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PaymentAgreementService } from 'modules/sales/payment-agreement/services';
import { PAYMENT_AGREEMENTS_LIST_KEY } from 'modules/sales/payment-agreement/constants';

export const useFindPaymentAgreements = () => {
  const { fetch, queryKey } = useTableRequest(PaymentAgreementService.search);

  return useQuery([PAYMENT_AGREEMENTS_LIST_KEY, queryKey], fetch);
};
