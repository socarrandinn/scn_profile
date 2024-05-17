import { RouteLoader } from '@dfl/react-security';
import { SeoSettingMenu } from './setting-menu';
import { RobotTxt } from './robot-txt/pages';

const Default = ({ title }: { title: string }) => {
  return <>{title}</>;
};

const routes = {
  settings: {
    path: '/',
    component: SeoSettingMenu,
  },
  ManufactureAreaList: {
    path: '/robot_txt/*',
    component: RobotTxt,
  },
  StorePickupList: {
    path: '/static_site_map_item/*',
    component: Default,
    data: { title: 'static_site_map_item' },
  },
  CausesIncidenceList: {
    path: '/sitemap/*',
    component: Default,
    data: { title: 'sitemap' },
  },
};

const SeoSettingModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo'} memory />;
};

export default SeoSettingModule;
