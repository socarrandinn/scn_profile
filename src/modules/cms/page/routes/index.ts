import { PageDetails, PageList } from 'modules/cms/page/pages';
import { RouteConfig } from '@dfl/react-security';
import { PAGE_PERMISSIONS } from 'modules/cms/page/constants/page.permissions';

const routes: RouteConfig = {
  PageList: {
    path: '/',
    permissions: PAGE_PERMISSIONS.PAGE_VIEW,
    component: PageList,
  },
  PageDetails: {
    path: '/:id/*',
    permissions: PAGE_PERMISSIONS.PAGE_VIEW,
    component: PageDetails,
  },
};

export default routes;
