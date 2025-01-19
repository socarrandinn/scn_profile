import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { USERS_INVITATION_LIST_KEY } from '../constants/queries';
import { InvitationService } from 'modules/authentication/services';
import { INVITATION_STATUS } from '../constants/user-status.enum';

export const useUserActionInvitation = (id: string, action: INVITATION_STATUS, onClose?: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('users');

  return useMutation((data: any) => InvitationService.actionInvitation(id, action, data), {
    onSuccess: () => {
      onClose?.();
      queryClient.invalidateQueries([USERS_INVITATION_LIST_KEY]);
      toast.success(t('successResend'));
    },
    onError: () => {
      toast.error(t('common:errors.generalErrorMessage'));
    },
  });
};
