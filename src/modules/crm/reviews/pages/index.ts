import { lazy } from 'react';

const loadReviewsList = () => import('modules/crm/reviews/pages/ReviewsList');
export const ReviewsList = lazy(loadReviewsList);
