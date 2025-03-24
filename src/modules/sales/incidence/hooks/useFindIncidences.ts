import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { IncidenceService } from 'modules/sales/incidence/services';
import { INCIDENCES_LIST_KEY } from 'modules/sales/incidence/constants';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { IIncidence } from '../interfaces';
import { SearchResponseType } from '@dfl/react-security';

export const useFindIncidences = (orderReference?: string) => {
  const filters = useMemo(() => {
    if (orderReference) {
      return new TermFilter({ field: 'orderReference', value: orderReference, objectId: true }).toQuery();
    }
    return null;
  }, [orderReference]);

  const { fetch, queryKey } = useTableRequest(IncidenceService.search, filters);

  return useQuery([INCIDENCES_LIST_KEY, queryKey], fetch);
};
