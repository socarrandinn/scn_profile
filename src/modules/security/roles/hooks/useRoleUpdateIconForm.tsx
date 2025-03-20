import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RoleService } from 'modules/security/roles/services';
import { IRole } from 'modules/security/roles/interfaces';
import { ROLES_LIST_KEY, ROLES_ONE_KEY } from 'modules/security/roles/constants/queries';

const useRoleUpdateIconForm = (role: IRole | undefined, onClose?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading, isSuccess, data } = useMutation<any, any, { icon: string }>(
    (icon: { icon: string }) => {
      return RoleService.updateAvatar(role?._id, icon.icon);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([role?._id, ROLES_ONE_KEY]);
        queryClient.invalidateQueries([ROLES_LIST_KEY]);
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

export default useRoleUpdateIconForm;
