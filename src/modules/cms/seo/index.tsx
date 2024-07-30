import { RouteLoader } from '@dfl/react-security';
import { SeoSettingMenu } from './setting-menu';
import { RobotTxt } from './robot-txt/pages';
import StaticSiteMapItemModule from 'modules/cms/seo/static-site-map-item';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

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
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/cms/seo'} memory />
    </Suspense>
  );
};

export default SeoSettingModule;
