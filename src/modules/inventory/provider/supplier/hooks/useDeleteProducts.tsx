import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteProducts = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('supplier');
  return useMutation(() => SupplierService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
