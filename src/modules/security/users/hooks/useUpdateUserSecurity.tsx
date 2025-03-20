import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserAdminService } from 'modules/security/users/services';
import { USERS_ONE_KEY } from 'modules/security/users/constants/queries';
import { IUser } from 'modules/security/users/interfaces/IUser';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useUpdateUserSecurity = (
  user: IUser | undefined,
  invalidateQuery: boolean = true,
  onClose?: () => void,
) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('account');

  return useMutation((data: any) => UserAdminService.updateSecurity(user?._id, data), {
    onSuccess: () => {
      onClose?.();
      if (invalidateQuery) {
        queryClient.invalidateQueries([user?._id, USERS_ONE_KEY]);
      }
      toast.success(t('successUpdate'));
    },
    onError: () => {
      toast.error(t('common:errors.generalErrorMessage'));
    },
  });
};
