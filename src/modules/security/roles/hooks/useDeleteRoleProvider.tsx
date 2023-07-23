import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RoleService } from 'modules/security/roles/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { invalidateRoleProviderListQuery } from 'modules/security/roles/services/util.service';
import roleProviderService from '../services/roleProvider.service';
import { ROLES_PROVIDERS_LIST_KEY } from '../constants/queries';

export const useDeleteRoleProvider = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('role');

  return useMutation(() => roleProviderService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      invalidateRoleProviderListQuery(queryClient);
      /* Aqui le paso el id directamente y no data._id
       porque el delete no devuelve el objeto elimindado */
      // queryClient.invalidateQueries([data._id]);
      queryClient.invalidateQueries([id]);
    },
  });
};
