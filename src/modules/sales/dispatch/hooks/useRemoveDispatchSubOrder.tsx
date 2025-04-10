import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { DispatchService } from '../services';
import { SUB_ORDERS_DISPATCH_LIST_KEY } from 'modules/sales/sub-orders/constants/sub-order.queries';

export const useRemoveDispatchSubOrder = (dispatchId: string, orderId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('dispatch');
  const filters = useMemo(() => new TermFilter({ field: '_id', value: orderId, objectId: true }), [orderId]);
  return useMutation(() => DispatchService.remove(dispatchId, filters), {
    onSuccess: (data) => {
      toast.success(t('successSubOrderDeleted'));
      onClose?.();
      queryClient.invalidateQueries([SUB_ORDERS_DISPATCH_LIST_KEY]);
      queryClient.invalidateQueries([dispatchId]);
    },
  });
};
