import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { RoleService } from 'modules/security/roles/services';
import { IRole } from 'modules/security/roles/interfaces';
import { userIdsSchema } from 'modules/security/users/schemas/user.schema';

const useRoleAddProvidersForm = (role: IRole | undefined, onClose: () => void) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(userIdsSchema),
    defaultValues: { users: [] },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation
  } = useMutation(
    (values: { users: string[] }) => {
      // const ids: string[] = values?.users?.map((user) => user._id as string) || [];
      return RoleService.addUsers(role?._id, values?.users);
    },
    {
      onSuccess: () => {
        toast.success(t('successAddUsers'));
        queryClient.invalidateQueries(['users', `users-${role?._id as string}`]);
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
    formState,
    reset: () => {
      resetMutation();
      reset();
    },

    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useRoleAddProvidersForm;
