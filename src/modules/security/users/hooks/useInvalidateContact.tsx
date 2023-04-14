import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CONTACT_LIST } from '../constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ContactsServices from '../services/contacts.services';

const useInvalidateContact = (contactId: string) => {
  const { t } = useTranslation('users');
  const queryClient = useQueryClient();

  return useMutation((status: string) => ContactsServices.invalidateContact(contactId), {
    onSuccess: ({ data }: any) => {
      toast.success(t('shipping.verification.invalidateSuccess'));
      queryClient.invalidateQueries([CONTACT_LIST]);
    },
    onError: (data) => {
      toast.error(t('shipping.verification.invalidateError'));
    },
  });
};

export default useInvalidateContact;
