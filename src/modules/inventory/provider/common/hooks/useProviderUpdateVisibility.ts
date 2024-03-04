import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import toast from 'react-hot-toast';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants/supplier.queries';
import { SupplierService } from 'modules/inventory/provider/supplier/services';

const useProviderUpdateVisibility = (providerId: string, onClose?: () => void) => {
  const { t } = useTranslation(['provider', 'errors']);
  const queryClient = useQueryClient();

  return useMutation((visible: boolean) => SupplierService.updateVisibility(providerId, { visible }), {
    onSuccess: () => {
      queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
      queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
      toast.success(t('provider:visibilitySuccessUpdate'));
      onClose?.();
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });
};

export default useProviderUpdateVisibility;
