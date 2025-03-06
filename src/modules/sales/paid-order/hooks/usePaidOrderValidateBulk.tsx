import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import { useMemo } from 'react';
import { EmptyFilter, InFilter } from '@dofleini/query-builder';

export const usePaidOrderValidateBulk = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('paidOrder');
  const { selected, clearSelection } = useTableSelection();

  const filters = useMemo(() => {
    if (Array.isArray(selected) && selected.length > 0) {
      return new InFilter({
        field: '_id',
        objectId: true,
        value: selected,
        type: 'IN',
      });
    }
    return new EmptyFilter();
  }, [selected]);

  return useMutation(
    () => {
      if (selected && selected?.length) return PaidOrderService.validateBulk({ filters });
      return Promise.reject({ message: t('validateMany'), reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successValidateMany'));
        clearSelection();
        queryClient.invalidateQueries([PAID_ORDERS_LIST_KEY]);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') toast.error(t('common:errors.needSelection'));
        else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );
};
