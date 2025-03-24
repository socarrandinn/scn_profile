import { useQuery } from '@tanstack/react-query';
import { PaymentAgreementService } from 'modules/sales/payment-agreement/services';
import { PAYMENT_AGREEMENTS_ONE_KEY } from 'modules/sales/payment-agreement/constants';
import { useCallback } from 'react';
import { IPaymentAgreement } from 'modules/sales/payment-agreement/interfaces';

export const useFindOnePaymentAgreement = (id: string | null) => {
  const fetch = useCallback(() => PaymentAgreementService.getOne(id as string), [id]);
  return useQuery<IPaymentAgreement>([id, PAYMENT_AGREEMENTS_ONE_KEY], fetch, { enabled: !!id });
};
