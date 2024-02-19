import { useQuery } from '@tanstack/react-query';
import { CausesIncidenceService } from 'modules/sales/settings/causes-incidence/services';
import { CAUSES_INCIDENCES_ONE_KEY } from 'modules/sales/settings/causes-incidence/constants';
import { useCallback } from 'react';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';

export const useFindOneCausesIncidence = (id: string | null) => {
  const fetch = useCallback(() => CausesIncidenceService.getOne(id as string), [id]);
  return useQuery<ICausesIncidence>([id, CAUSES_INCIDENCES_ONE_KEY], fetch, { enabled: !!id });
};
