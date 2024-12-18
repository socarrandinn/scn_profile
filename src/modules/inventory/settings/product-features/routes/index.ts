import { RouteConfig } from '@dfl/react-security';
import { PRODUCT_FEATURE_PERMISSIONS } from '../constants';
import { ProductFeatureList } from '../pages';

const routes: RouteConfig = {
  TagsList: {
    path: '/',
    permissions: PRODUCT_FEATURE_PERMISSIONS.VIEW,
    component: ProductFeatureList,
  },
};

export default routes;
