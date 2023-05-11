import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TeamService } from 'modules/rrhh/team/services';
import { TEAMS_LIST_KEY } from 'modules/rrhh/team/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteTeam = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('team');
  return useMutation(() => TeamService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([TEAMS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
