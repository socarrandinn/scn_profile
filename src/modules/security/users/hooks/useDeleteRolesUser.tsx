import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_ME_KEY, USERS_ONE_KEY } from 'modules/security/users/constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { UserAdminService } from 'modules/security/users/services';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

export const useDeleteRolesUser = (_id: string, allRoles: IRoleSetting[], onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('role');
  const { pathname } = useLocation();

  const isMe = useMemo(() => (pathname?.includes('/account') ? 'me' : ''), [pathname]);

  return useMutation(
    async (role: IRoleSetting) =>
      await UserAdminService.addRoles(_id,
        allRoles.filter((r) => r._id !== role._id).map(
          (role) => role.role), role?.type as ROLE_TYPE_ENUM, role?.space),

    {
      onSuccess: () => {
        toast.success(t('successDeleted'));
        onClose?.();
        isMe && queryClient.invalidateQueries([USER_ME_KEY]);
        queryClient.invalidateQueries([_id, USERS_ONE_KEY]);
      },
      onError: () => {
        toast.error(t('common:errors.generalErrorMessage'));
      },
    },
  );
};
