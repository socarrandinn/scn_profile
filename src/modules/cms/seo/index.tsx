import { RouteLoader } from '@dfl/react-security';
import { SeoSettingMenu } from './setting-menu';
import { RobotTxt } from './robot-txt/pages';
import StaticSiteMapItemModule from 'modules/cms/seo/static-site-map-item';

const routes = {
  settings: {
    path: '/',
    component: SeoSettingMenu,
  },
  RobotTxt: {
    path: '/robot_txt/*',
    component: RobotTxt,
  },
  StaticSiteMapItemList: {
    path: '/static_site_map_items/*',
    component: StaticSiteMapItemModule,
  },
};

const SeoSettingModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo'} memory />;
};

export default SeoSettingModule;
