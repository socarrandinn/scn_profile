import { CategoryList } from 'modules/store/product/settings/category/pages';
import { RouteConfig } from '@dfl/react-security';
import { CATEGORY_PERMISSIONS } from 'modules/store/product/settings/category/constants/category.permissions';

const routes: RouteConfig = {
  CategoryList: {
    path: '/',
    permissions: CATEGORY_PERMISSIONS.CATEGORY_VIEW,
    component: CategoryList,
  },
};

export default routes;
