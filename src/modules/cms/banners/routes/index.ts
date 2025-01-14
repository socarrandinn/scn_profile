import { BannerList } from 'modules/cms/banners/pages';
import { RouteConfig } from '@dfl/react-security';
import { BANNER_PERMISSIONS } from 'modules/cms/banners/constants/banner.permissions';

const routes: RouteConfig = {
  BannerList: {
    path: '/',
    permissions: BANNER_PERMISSIONS.BANNER_VIEW,
    component: BannerList,
  },
};

export default routes;
