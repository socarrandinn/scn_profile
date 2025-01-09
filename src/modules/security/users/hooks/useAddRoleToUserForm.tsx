import { useEffect, useMemo } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { userRolesSchema } from 'modules/security/users/schemas/user.schema';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { UserAdminService } from 'modules/security/users/services';
import { USERS_ONE_KEY } from '../constants/queries';
import { useLocation } from 'react-router';

const useAddRoleToUserForm = (user: IUser | undefined, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const isMe = useMemo(() => (pathname?.includes('/user/me') ? 'me' : ''), [pathname]);
  const { t } = useTranslation('users');

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(userRolesSchema),
    defaultValues: { roles: user?.security?.roles },
  });

  const defaultRoles = user?.security?.roles;
  useEffect(() => {
    if (defaultRoles) {
      reset({ roles: defaultRoles });
    }
  }, [defaultRoles, reset]);

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
    isError,
  } = useMutation(
    (values: { roles: Array<{ _id: string, role?: string }> }) => {
      const rolesIds: string[] = values?.roles?.map((role) => role.role || role._id) || [];
      return UserAdminService.addRoles(user?._id, rolesIds);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([user?._id, isMe, USERS_ONE_KEY]);
        toast.success(t('successAddRoles'));
        onClose?.();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    isError,
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

export default useAddRoleToUserForm;
