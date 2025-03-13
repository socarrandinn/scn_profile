import { useQuery } from '@tanstack/react-query';
import { IncidenceService } from 'modules/sales/incidence/services';
import { INCIDENCES_ONE_KEY } from 'modules/sales/incidence/constants';
import { useCallback } from 'react';
import { IIncidence } from 'modules/sales/incidence/interfaces';

export const useFindOneIncidence = (id: string | null) => {
  const fetch = useCallback(() => IncidenceService.getOne(id as string), [id]);
  return useQuery<IIncidence>([id, INCIDENCES_ONE_KEY], fetch, { enabled: !!id });
};
