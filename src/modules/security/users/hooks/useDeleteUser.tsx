import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserAdminService } from 'modules/security/users/services';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteUser = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('users');

  return useMutation(() => UserAdminService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([USERS_LIST_KEY]);
      queryClient.invalidateQueries([data._id]);
    },
  });
};
