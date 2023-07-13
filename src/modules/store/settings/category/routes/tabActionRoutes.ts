
import { RouteConfig } from '@dfl/react-security';
import SubCategoriesContainer from 'modules/store/settings/category/containers/SubCategoriesContainer';

const tabActionRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SubCategoriesContainer,
  },
  product: {
    path: '/product',
    component: SubCategoriesContainer,
  },
};

export default tabActionRoutes;
