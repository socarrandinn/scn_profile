import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_LIST_KEY, CLIENTS_RECIPIENT_LIST_KEY } from 'modules/crm/clients/constants';
import { InFilter, TermFilter } from '@dofleini/query-builder';
import { isArray } from 'lodash';

export const useFindClients = () => {
  const { fetch, queryKey } = useTableRequest(ClientsService.search);
  return useQuery([CLIENTS_LIST_KEY, queryKey], fetch);
};
export const useFindRecipientsClients = (clientId: string) => {
  const filters = useMemo(() => new TermFilter({ field: 'owner', value: clientId, objectId: true }), [clientId]);
  const { fetch, queryKey } = useTableRequest(ClientsService.search, filters);

  return useQuery([CLIENTS_RECIPIENT_LIST_KEY, queryKey], fetch, { enabled: !!clientId });
};

export const useFindClientsByIds = (clients: string[]) => {
  const filters = useMemo(
    () => new InFilter({ field: '_id', value: isArray(clients) ? clients : [clients] }),
    [clients],
  );
  const { fetch, queryKey } = useTableRequest(ClientsService.search, filters);
  return useQuery([CLIENTS_LIST_KEY, queryKey], fetch, { enabled: clients?.length > 0 });
};
