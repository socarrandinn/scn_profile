import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { teamSchema } from 'modules/rrhh/team/schemas/team.schema';
import { ITeam } from 'modules/rrhh/team/interfaces';
import { TeamService } from 'modules/rrhh/team/services';
import { TEAMS_LIST_KEY } from 'modules/rrhh/team/constants';
import { useEffect } from 'react';

const initValues: ITeam = {
  name: '',
  description: '',
  manager: null,
};

const useTeamCreateForm = (onClose: () => void, defaultValues: ITeam = initValues) => {
  const { t } = useTranslation('team');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(teamSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (team: ITeam) => TeamService.saveOrUpdate(team),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([TEAMS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useTeamCreateForm;
