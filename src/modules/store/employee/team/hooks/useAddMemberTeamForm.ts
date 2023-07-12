import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ITeam } from 'modules/store/employee/team/interfaces';
import { employeeIdSchema } from 'modules/store/employee/management/schemas/employee.schema';
import { TeamService } from 'modules/store/employee/team/services';

const useAddMemberTeamForm = (team: ITeam | undefined, onClose: () => void) => {
  const { t } = useTranslation('team');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(employeeIdSchema),
    defaultValues: { employees: [] },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (values: { employees: string[] }) => {
      // const ids: string[] = values?.users?.map((user) => user._id as string) || [];
      return TeamService.addMembers(team?._id, values?.employees);
    },
    {
      onSuccess: () => {
        toast.success(t('successAddUsers'));
        queryClient.invalidateQueries(['users', `users-${team?._id as string}`]);
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
    reset: () => {
      resetMutation();
      reset();
    },

    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useAddMemberTeamForm;
