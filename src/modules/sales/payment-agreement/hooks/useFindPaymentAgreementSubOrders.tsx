import { TermFilter } from '@dofleini/query-builder';
import { usePaymentAgreementDetail } from '../contexts/paymentAgreementContext';
import { useMemo } from 'react';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { SUB_ORDERS_LIST_KEY } from 'modules/sales/sub-orders/constants/sub-order.queries';
import { useQuery } from '@tanstack/react-query';
import { SubOrderService } from 'modules/sales/sub-orders/services';

export const useFindPaymentAgreementSubOrders = () => {
  const { paymentAgreement } = usePaymentAgreementDetail();

  /* filter order by paymentAgreement */
  const filters = useMemo(
    () => new TermFilter({ field: 'paymentAgreement', value: paymentAgreement?._id, objectId: true }),
    [paymentAgreement?._id],
  );

  const { fetch, queryKey } = useTableRequest(SubOrderService.search, filters);

  return useQuery([SUB_ORDERS_LIST_KEY, queryKey, 'paymentAgreement'], fetch, { enabled: !!paymentAgreement?._id });
};
