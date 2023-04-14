import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RoleService } from 'modules/security/roles/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';

export const useDeleteManyRoleBySelection = (roleId: string, userId?: string) => {
  const queryClient = useQueryClient();
  const { selected, clearSelection } = useTableSelection();
  const { t } = useTranslation('role');

  return useMutation(
    () => {
      if (userId) {
        return RoleService.deleteUsers(roleId, [userId]);
      }

      if (roleId && selected && selected.length) {
        return RoleService.deleteUsers(roleId, selected as string[]);
      }

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: 'You must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', `users-${roleId}`]);
        toast.success(t('successDeletedUsers'));
        clearSelection();
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') {
          toast.error(t('common:errors.needSelection'));
        } else {
          // handle the rest of errors here
          // ...

          // generic error in case you don't recognize the error
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );
};
