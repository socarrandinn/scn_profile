import { RouteConfig } from '@dfl/react-security';

import { StaticSiteMapItem, StaticSiteMapItemList } from '../pages';

const staticSiteMapRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: StaticSiteMapItemList,
  },
  history_change: {
    path: '/history_change',
    component: StaticSiteMapItem,
  },
};

export default staticSiteMapRoutes;
