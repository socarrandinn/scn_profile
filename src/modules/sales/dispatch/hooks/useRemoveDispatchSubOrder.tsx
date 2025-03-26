import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { DispatchService } from '../services';
import { DISPATCHES_LIST_KEY } from '../constants';

export const useRemoveDispatchSubOrder = (dispatchId: string, id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('dispatch');
  const filters = useMemo(() => new TermFilter({ field: '_id', value: dispatchId, objectId: true }), [dispatchId]);
  return useMutation(() => DispatchService.remove(dispatchId, filters), {
    onSuccess: (data) => {
      toast.success(t('successSubOrderDeleted'));
      onClose?.();
      queryClient.invalidateQueries([DISPATCHES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
