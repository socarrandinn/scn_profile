import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PaymentMethodsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_METHOD_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';

export const useFindPaymentMethods = () => {
  const { fetch, queryKey } = useTableRequest(PaymentMethodsService.search);

  return useQuery([PAYMENT_METHOD_LIST_KEY, queryKey], fetch);
};
