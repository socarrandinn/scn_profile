import { CategoryList } from 'modules/store/employee/settings/category/pages';
import { RouteConfig } from '@dfl/react-security';
import { CATEGORY_PERMISSIONS } from 'modules/store/employee/settings/category/constants/category.permissions';

const routes: RouteConfig = {
  CategoryList: {
    path: '/',
    permissions: CATEGORY_PERMISSIONS.CATEGORY_VIEW,
    component: CategoryList,
  },
};

export default routes;
