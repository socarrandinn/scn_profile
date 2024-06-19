import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { UsersInviteService } from 'modules/security/users-invite/services';
import { USERS_INVITES_LIST_KEY } from 'modules/security/users-invite/constants';

export const useDeleteManyUsersInvites = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('usersInvite');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return UsersInviteService.deleteMany(selected as string[]);
      return Promise.reject({ message: t('deleteMany'), reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([USERS_INVITES_LIST_KEY]);
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
