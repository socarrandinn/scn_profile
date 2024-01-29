import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_LIST_KEY } from 'modules/crm/clients/constants';
import { EmptyFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';

export const useFindClients = () => {
  const filter = useMemo(
    () => new EmptyFilter(),
    // new TermFilter({
    //   field: 'roles.size',
    //   value: 1,
    // }),
    [],
  );

  const { fetch, queryKey } = useTableRequest(ClientsService.search, filter);

  return useQuery([CLIENTS_LIST_KEY, queryKey], fetch);
};
