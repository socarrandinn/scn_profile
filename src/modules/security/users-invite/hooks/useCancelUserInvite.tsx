import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserInviteService } from 'modules/security/users/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { USERS_INVITES_LIST_KEY } from '../constants';

const useCancelUserInvite = (userId: string) => {
  const { t } = useTranslation(['usersInvite', 'errors']);
  const queryClient = useQueryClient();

  return useMutation(() => UserInviteService.cancel(userId), {
    onSuccess: () => {
      toast.success(t('usersInvite:successCancelUser'));
      queryClient.invalidateQueries([USERS_INVITES_LIST_KEY]);
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  });
};

export default useCancelUserInvite;
