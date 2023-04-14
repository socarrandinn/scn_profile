import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import ContactServices from 'modules/security/users/services/contacts.services';
import { IShippingContact } from '../interfaces/IShippingContact';
import { CONTACT_ONE_KEY } from '../constants/queries';

export const useFindOneContact = (id: string | null) => {
  const fetch = useCallback(() => ContactServices.getOne(id as string), [id]);
  return useQuery<IShippingContact>([id, CONTACT_ONE_KEY], fetch, { enabled: !!id });
};
