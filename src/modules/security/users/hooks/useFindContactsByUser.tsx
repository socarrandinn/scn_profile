import ContactServices from 'modules/security/users/services/contacts.services';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CONTACT_LIST } from '../constants/queries';

export const useFindContactsByUser = (ownerId: string) => {
  const { fetch, queryKey } = useTableRequest(ContactServices.search, {
    field: 'owner',
    value: ownerId,
    objectId: true,
  });

  return useQuery([CONTACT_LIST, `users-${ownerId}`, queryKey], fetch);
};
