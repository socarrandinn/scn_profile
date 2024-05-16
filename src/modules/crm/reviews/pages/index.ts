import { lazy } from 'react';

const loadReviewsList = () => import('modules/crm/reviews/pages/ReviewsList');
export const ReviewsList = lazy(loadReviewsList);

const loadReviewsReportDetails = () => import('modules/crm/reviews/pages/ReviewsReportDetails');
export const ReviewsReportDetails = lazy(loadReviewsReportDetails);
