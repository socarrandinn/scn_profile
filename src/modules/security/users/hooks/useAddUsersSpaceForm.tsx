import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IRole } from 'modules/security/roles/interfaces';
import { USERS_LIST_KEY } from '../constants/queries';
import spaceService from '../services/space.service';
import { spaceUserScheme } from '../schemas/space.shema';

const useAddUsersSpaceForm = (onClose: () => void) => {
  const { t } = useTranslation('providerProduct');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(spaceUserScheme),
    defaultValues: { users: [] },
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation<any, any, { users: IUser[]; role: IRole }>(
    ({ users, role }) => {
      const usersIds: string[] = users?.map((user) => user._id as string) || [];
      const roleId = role?._id;
      return spaceService.addUsers(usersIds, roleId as string);
    },
    {
      onSuccess: () => {
        toast.success(t('successAddUsers'));
        queryClient.invalidateQueries([USERS_LIST_KEY]);
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values as any);
    }),
  };
};

export default useAddUsersSpaceForm;
