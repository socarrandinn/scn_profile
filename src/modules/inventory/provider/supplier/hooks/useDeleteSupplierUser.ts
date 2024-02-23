import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { RoleProvidersService } from 'modules/security/roles/services';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { SUPPLIER_USERS_KEY } from 'modules/inventory/provider/supplier/constants';

export const useDeleteSupplierUser = (userId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('supplier');
  const { providerProductsId: supplierId } = useProviderProductsDetail();

  return useMutation(() => RoleProvidersService.deleteUser(userId, supplierId), {
    onSuccess: () => {
      toast.success(t('successDeleteUser'));
      onClose?.();
      queryClient.invalidateQueries([SUPPLIER_USERS_KEY, supplierId]);
    },
  });
};
