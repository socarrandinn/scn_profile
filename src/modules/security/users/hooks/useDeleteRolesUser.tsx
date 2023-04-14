import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USERS_ONE_KEY } from 'modules/security/users/constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteRolesUser = (_id: string, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('role');

  return useMutation(
    async (roleToDelete: string) => {}, // todo
    // UserService.update(_id, {
    //   _id,
    //   roles: roles.map(({ _id }) => _id).filter((role) => role !== roleToDelete),
    // }),
    {
      onSuccess: () => {
        toast.success(t('successDeleted'));
        onClose?.();
        queryClient.invalidateQueries([_id, USERS_ONE_KEY]);
      },
      onError: () => {
        toast.error(t('common:errors.generalErrorMessage'));
      },
    },
  );
};
