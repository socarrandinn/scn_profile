import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CausesIncidenceService } from 'modules/sales/settings/causes-incidence/services';
import { CAUSES_INCIDENCES_LIST_KEY } from 'modules/sales/settings/causes-incidence/constants';

export const useFindCausesIncidences = () => {
  const { fetch, queryKey } = useTableRequest(CausesIncidenceService.search);

  return useQuery([CAUSES_INCIDENCES_LIST_KEY, queryKey], fetch);
};
