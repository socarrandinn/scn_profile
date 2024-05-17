import { RouteLoader } from '@dfl/react-security';
import { SeoSettingMenu } from './setting-menu';

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
    component: Default,
    data: { title: 'robot_txt' },
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
  return <RouteLoader routes={routes} notfoundRedirect={'/cms/seo/settings'} memory />;
};

export default SeoSettingModule;
