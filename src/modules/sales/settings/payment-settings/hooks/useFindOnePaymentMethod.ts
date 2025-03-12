import { useQuery } from '@tanstack/react-query';
import { PaymentMethodsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_METHOD_ONE_KEY } from 'modules/sales/settings/payment-settings/constants';
import { useCallback } from 'react';
import { IPaymentMethod } from 'modules/sales/settings/payment-settings/interfaces';

export const useFindOnePaymentMethod = (id: string | null) => {
  const fetch = useCallback(() => PaymentMethodsService.getOne(id as string), [id]);
  return useQuery<IPaymentMethod>([id, PAYMENT_METHOD_ONE_KEY], fetch, { enabled: !!id });
};
