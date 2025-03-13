import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { IncidenceService } from 'modules/sales/incidence/services';
import { INCIDENCES_LIST_KEY } from 'modules/sales/incidence/constants';

export const useFindIncidences = () => {
  const { fetch, queryKey } = useTableRequest(IncidenceService.search);

  return useQuery([INCIDENCES_LIST_KEY, queryKey], fetch);
};
