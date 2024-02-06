import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_LIST_KEY } from 'modules/crm/clients/constants';

export const useFindClients = () => {
  const { fetch, queryKey } = useTableRequest(ClientsService.search);

  return useQuery([CLIENTS_LIST_KEY, queryKey], fetch);
};
