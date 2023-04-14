import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RoleService } from 'modules/security/roles/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { invalidateRoleListQuery } from 'modules/security/roles/services/util.service';

export const useDeleteRole = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('role');

  return useMutation(() => RoleService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      invalidateRoleListQuery(queryClient);
      queryClient.invalidateQueries([data._id]);
    },
  });
};
