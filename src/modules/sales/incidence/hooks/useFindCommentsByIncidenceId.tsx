import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { IncidenceCommentsService } from '../services';
import { INCIDENCE_COMMENTS_LIST } from '../constants';

export const useFindCommentsByIncidenceId = (incidence: string) => {
  const filter = { type: 'TERM', field: 'incidence', value: incidence };
  const fetch = useCallback(() => IncidenceCommentsService.search({ filters: filter }), [incidence]);

  return useQuery([INCIDENCE_COMMENTS_LIST, filter], fetch, { enabled: incidence !== '' });
};
