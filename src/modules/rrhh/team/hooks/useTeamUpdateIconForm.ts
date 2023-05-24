import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TEAMS_LIST_KEY, TEAMS_ONE_KEY } from 'modules/rrhh/team/constants/team.queries';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { TeamService } from 'modules/rrhh/team/services';

const useTeamUpdateIconForm = (team: ITeam | undefined, onClose?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading, isSuccess, data } = useMutation<any, any, { icon: string }>(
    (icon: { icon: string }) => {
      return TeamService.updateAvatar(team?._id, icon.icon);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([TEAMS_LIST_KEY]);
        queryClient.invalidateQueries([team?._id, TEAMS_ONE_KEY]);
        onClose?.();
      },
    },
  );

  return {
    error,
    isLoading,
    isSuccess,
    data,
    onSubmit: mutate,
  };
};

export default useTeamUpdateIconForm;
