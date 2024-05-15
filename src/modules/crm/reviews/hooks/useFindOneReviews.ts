import { useQuery } from '@tanstack/react-query';
import { AdminReviewsService } from 'modules/crm/reviews/services';
import { ADMIN_REVIEWS_ONE_KEY } from 'modules/crm/reviews/constants';
import { useCallback } from 'react';
import { IReviews } from 'modules/crm/reviews/interfaces';

export const useFindOneReviews = (id: string | null) => {
  const fetch = useCallback(() => AdminReviewsService.getOne(id as string), [id]);
  return useQuery<IReviews>([id, ADMIN_REVIEWS_ONE_KEY], fetch, { enabled: !!id });
};
