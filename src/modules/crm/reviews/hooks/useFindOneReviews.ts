import { useQuery } from '@tanstack/react-query';
import { ReviewsService } from 'modules/crm/reviews/services';
import { REVIEWS_ONE_KEY } from 'modules/crm/reviews/constants';
import { useCallback } from 'react';
import { IReviews } from 'modules/crm/reviews/interfaces';

export const useFindOneReviews = (id: string | null) => {
  const fetch = useCallback(() => ReviewsService.getOne(id as string), [id]);
  return useQuery<IReviews>([id, REVIEWS_ONE_KEY], fetch, { enabled: !!id });
};
