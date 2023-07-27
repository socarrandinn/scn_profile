import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IRoleProvider } from 'modules/security/roles/interfaces';
import { ROLES_PROVIDER_ONE_KEY, ROLES_PROVIDERS_LIST_KEY } from 'modules/security/roles/constants/queries';
import roleProviderService from '../services/roleProvider.service';

const useRoleProviderUpdateIconForm = (role: IRoleProvider | undefined, onClose?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading, isSuccess, data } = useMutation<any, any, { icon: string }>(
    (icon: { icon: string }) => {
      return roleProviderService.updateAvatar(role?._id, icon.icon);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([role?._id, ROLES_PROVIDER_ONE_KEY]);
        queryClient.invalidateQueries([ROLES_PROVIDERS_LIST_KEY]);
        onClose?.();
      },
    },
  );

  return {
    error,
    isLoading,
    isSuccess,
    data,
    onSubmit: mutate
  };
};

export default useRoleProviderUpdateIconForm;
