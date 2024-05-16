import { RouteConfig } from '@dfl/react-security';
import { REVIEWS_PERMISSIONS } from '../constants';
import { ReviewsList, ReviewsReportDetails } from '../pages';

const routes: RouteConfig = {
  ReviewsList: {
    path: '/',
    permissions: REVIEWS_PERMISSIONS.REVIEWS_VIEW,
    component: ReviewsList,
  },
  ReviewsDetail: {
    path: '/:id/*',
    permissions: REVIEWS_PERMISSIONS.REVIEWS_VIEW,
    component: ReviewsReportDetails,
  },
};

export default routes;
