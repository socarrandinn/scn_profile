import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UsersInviteService } from 'modules/security/users-invite/services';
import { USERS_INVITES_LIST_KEY } from 'modules/security/users-invite/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteUsersInvite = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('usersInvite');
  return useMutation(() => UsersInviteService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([USERS_INVITES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
