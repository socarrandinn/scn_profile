import { RouteConfig } from '@dfl/react-security';
import { REVIEWS_PERMISSIONS } from '../constants';
import { ReviewsList } from '../pages';

const routes: RouteConfig = {
  ReviewsList: {
    path: '/',
    permissions: REVIEWS_PERMISSIONS.REVIEWS_VIEW,
    component: ReviewsList,
  },
};

export default routes;
