import { TestimonyList } from 'modules/cms/testimony/pages';
import { RouteConfig } from '@dfl/react-security';
import { TESTIMONY_PERMISSIONS } from 'modules/cms/testimony/constants/testimony.permissions';

const routes: RouteConfig = {
  TestimonyList: {
    path: '/',
    permissions: TESTIMONY_PERMISSIONS.TESTIMONY_VIEW,
    component: TestimonyList,
  },
};

export default routes;
