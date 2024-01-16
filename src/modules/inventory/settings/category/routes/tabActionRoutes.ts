import { RouteConfig } from '@dfl/react-security';
import SubCategoriesContainer from 'modules/inventory/settings/category/containers/SubCategoriesContainer';
import { CategoryProductsPage } from 'modules/inventory/settings/category/pages';

const tabActionRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SubCategoriesContainer,
  },
  product: {
    path: '/products',
    component: CategoryProductsPage,
  },
  activity: {
    path: '/activity',
    component: () => 'Actividad',
  },
};

export default tabActionRoutes;
