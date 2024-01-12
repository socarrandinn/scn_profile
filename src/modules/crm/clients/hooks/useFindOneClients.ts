import { useQuery } from '@tanstack/react-query';
import { ClientsService } from 'modules/crm/clients/services';
import { CLIENTS_ONE_KEY } from 'modules/crm/clients/constants';
import { useCallback } from 'react';
import { IClients } from 'modules/crm/clients/interfaces';

export const useFindOneClients = (id: string | null) => {
  const fetch = useCallback(() => ClientsService.getOne(id as string), [id]);
  return useQuery<IClients>([id, CLIENTS_ONE_KEY], fetch, { enabled: !!id });
};
