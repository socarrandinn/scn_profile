import { RouteConfig } from '@dfl/react-security';
import SubCategoriesContainer from 'modules/inventory/settings/category/containers/SubCategoriesContainer';

import { CategoryHistoryChangePage, CategoryProductsPage } from '../pages';

const tabActionRoutes: RouteConfig = {
  general: {
    path: '/subcategories',
    component: SubCategoriesContainer,
  },
  product: {
    path: '/products',
    component: CategoryProductsPage,
  },
  activity: {
    path: '/history_change',
    component: CategoryHistoryChangePage,
  },
};

export default tabActionRoutes;
