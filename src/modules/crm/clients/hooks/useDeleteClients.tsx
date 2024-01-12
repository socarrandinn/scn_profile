import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_LIST_KEY } from 'modules/crm/clients/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteClients = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('clients');
  return useMutation(() => ClientsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CLIENTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
