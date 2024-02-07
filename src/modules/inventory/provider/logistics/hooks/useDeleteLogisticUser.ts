import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { RoleProvidersService } from 'modules/security/roles/services';
import { SUPPLIER_USERS_KEY } from 'modules/inventory/provider/supplier/constants';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';

export const useDeleteLogisticUser = (userId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('supplier');
  const { logisticId } = useLogisticsDetailContext();

  return useMutation(() => RoleProvidersService.deleteUser(userId, logisticId), {
    onSuccess: () => {
      toast.success(t('successDeleteUser'));
      onClose?.();
      queryClient.invalidateQueries([SUPPLIER_USERS_KEY, logisticId]);
    },
  });
};
