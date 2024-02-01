import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_LIST_KEY } from 'modules/crm/clients/constants';
import { EmptyFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';

export const useFindClients = () => {
  // TODO: Create client recipients fitler
  const filter = useMemo(() => new EmptyFilter(), []);

  const { fetch, queryKey } = useTableRequest(ClientsService.search, filter);

  return useQuery([CLIENTS_LIST_KEY, queryKey], fetch);
};
