import { StaticSiteMapItemList } from 'modules/cms/seo/static-site-map-item/pages';
import { RouteConfig } from '@dfl/react-security';
import { STATIC_SITE_MAP_ITEM_PERMISSIONS } from 'modules/cms/seo/static-site-map-item/constants/static-site-map-item.permissions';

const routes: RouteConfig = {
  StaticSiteMapItemList: {
    path: '/',
    permissions: STATIC_SITE_MAP_ITEM_PERMISSIONS.STATIC_SITE_MAP_ITEM_VIEW,
    component: StaticSiteMapItemList,
  },
};

export default routes;
