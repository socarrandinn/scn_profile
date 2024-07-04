import { useQuery } from '@tanstack/react-query';
import { AnalyticReviewsService } from 'modules/crm/reviews/services';
import { REVIEW_ANALYTIC_SUMMARY } from 'modules/crm/reviews/constants';
import { useCallback } from 'react';
import { IReviewSummary } from 'modules/crm/reviews/interfaces';

export const useFindReviewBadgeSummary = () => {
  const fetch = useCallback(() => AnalyticReviewsService.reviewSummary(), []);
  return useQuery<IReviewSummary>([REVIEW_ANALYTIC_SUMMARY], fetch, { refetchInterval: 20000 });
};
