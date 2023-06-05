import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { TeamService } from 'modules/rrhh/team/services';

export const useDeleteManyTeamMembers = (teamId: string, userId?: string) => {
  const queryClient = useQueryClient();
  const { selected, clearSelection } = useTableSelection();
  const { t } = useTranslation('team');

  return useMutation(
    () => {
      if (userId) {
        return TeamService.deleteMembers(teamId, [userId]);
      }

      if (teamId && selected && selected.length) {
        return TeamService.deleteMembers(teamId, selected as string[]);
      }

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: 'You must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['members', teamId]);
        toast.success(t('successDeletedMembers'));
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
