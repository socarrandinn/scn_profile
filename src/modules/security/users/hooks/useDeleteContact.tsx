import { useMutation, useQueryClient } from '@tanstack/react-query';
import ContactService from 'modules/security/users/services/contacts.services';
import { CONTACT_LIST } from 'modules/security/users/constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteContact = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('role');

  return useMutation(() => ContactService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CONTACT_LIST]);
      queryClient.invalidateQueries([data._id]);
    },
  });
};
