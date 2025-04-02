import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { IncidenceService } from '../services';
import { INCIDENCE_COMMENTS_LIST } from '../constants';

export const useFindCommentsByIncidenceId = (incidence: string) => {
  const fetch = useCallback(() => IncidenceService.searchComments(incidence), [incidence]);

  return useQuery([INCIDENCE_COMMENTS_LIST], fetch, {
    enabled: !!incidence
  });
};
