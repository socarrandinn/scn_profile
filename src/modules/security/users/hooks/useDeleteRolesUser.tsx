import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_ME_KEY, USERS_ONE_KEY } from 'modules/security/users/constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { UserAdminService } from 'modules/security/users/services';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { useMemo } from 'react';
import { useLocation } from 'react-router';

export const useDeleteRolesUser = (_id: string, allRoles: IRoleSetting[], onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('role');
  const { pathname } = useLocation();

  const isMe = useMemo(() => (pathname?.includes('/account') ? 'me' : ''), [pathname]);

  return useMutation(
    async (role: IRoleSetting) => {
      const rolesInSameSpace = allRoles.filter((r) => r?.space === role?.space);
      const remainingRoles = rolesInSameSpace.filter((r) => r?._id !== role?._id);
      const rolesToSend = remainingRoles.map((r) => r?.role);

      console.log('Enviando a UserAdminService.addRoles:', {
        userId: _id,
        roles: rolesToSend,
        space: role?.space,
      });

      return await UserAdminService.addRoles(
        _id,
        rolesToSend,
        role.space,
      );
    },
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
