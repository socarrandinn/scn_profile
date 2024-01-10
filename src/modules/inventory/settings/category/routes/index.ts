import { CategoryList, CategoryDetail } from 'modules/inventory/settings/category/pages';
import { RouteConfig } from '@dfl/react-security';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants/category.permissions';

const routes: RouteConfig = {
  CategoryList: {
    path: '/',
    permissions: CATEGORY_PERMISSIONS.CATEGORY_VIEW,
    component: CategoryList,
  },
  CategoryDetail: {
    path: '/:id/*',
    component: CategoryDetail,
  },
};

export default routes;
