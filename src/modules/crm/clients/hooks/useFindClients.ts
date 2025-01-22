import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_LIST_KEY, CLIENTS_RECIPIENT_LIST_KEY } from 'modules/crm/clients/constants';
import { TermFilter } from '@dofleini/query-builder';

export const useFindClients = () => {
  const { fetch, queryKey } = useTableRequest(ClientsService.search);
  return useQuery([CLIENTS_LIST_KEY, queryKey], fetch);
};
export const useFindRecipientsClients = (clientId: string) => {
  const filters = useMemo(() => new TermFilter({ field: 'owner', value: clientId, objectId: true }), [clientId]);
  const { fetch, queryKey } = useTableRequest(ClientsService.search, filters);

  return useQuery([CLIENTS_RECIPIENT_LIST_KEY, queryKey], fetch, { enabled: !!clientId });
};
