import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { RoleService } from 'modules/security/roles/services';
import { IRole } from 'modules/security/roles/interfaces';
import { rolePermissionsSchema } from 'modules/security/roles/schemas/role.schema';
import { ROLES_ONE_KEY } from 'modules/security/roles/constants/queries';
import { useEffect } from 'react';
import { invalidateRoleListQuery } from 'modules/security/roles/services/util.service';

const useAddPermissionToRoleForm = (role: IRole | undefined, onClose: () => void) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();
  // @ts-ignore
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(rolePermissionsSchema),
    defaultValues: { permissions: role?.permissions },
  });

  const permissions = role?.permissions;
  useEffect(() => {
    // @ts-ignore
    if (permissions) {
      reset({ permissions });
    }
  }, [permissions, reset]);

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (values: { permissions: Array<{ value: string }> | [] }) => {
      const permissionsNames: string[] =
        values?.permissions?.map((permission: string | any) =>
          typeof permission === 'string' ? permission : permission.value,
        ) || [];

      return RoleService.addPermissions(role?._id, permissionsNames);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([role?._id, ROLES_ONE_KEY]);
        invalidateRoleListQuery(queryClient, role);
        toast.success(t('successAddPermissions'));
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

export default useAddPermissionToRoleForm;
